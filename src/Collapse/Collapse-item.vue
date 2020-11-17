<template>
  <div class="collapse-item" :class="{open}">
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluCollapseItem',
  inject: ['eventBus'],
  data() {
    return {
      open: false,
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    toggle() {
      let select = {[true]: 'removeActiveName', [false]: 'addActiveName'}
      this.eventBus && this.eventBus.$emit(`update:${select[this.open]}`, this.name)
    },
  },
  created() {
    this.eventBus && this.eventBus.$on('update:activeName', (names) => {
      this.open = names.indexOf(this.name) >= 0;
    })
  },
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
%border-bottom-radius {
  border-bottom-right-radius: $border-radius;
  border-bottom-left-radius: $border-radius;
}

%border-top-radius {
  border-top-right-radius: $border-radius;
  border-top-left-radius: $border-radius;
}

.collapse-item {

  .title {
    border: 1px solid $grey;
    min-height: 32px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    border-bottom: none;
    background: #eee;
  }

  .content {
    border: 1px solid $grey;
    border-bottom: none;
  }

  &:first-child {
    .title {
      @extend %border-top-radius
    }
  }

  &:last-child {
    .title {
      border-bottom: 1px solid $grey;
      @extend %border-bottom-radius
    }

    &[class~='open'] {
      .title {
        border-bottom: none;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }

      .content {
        border-bottom: 1px solid $grey;
        @extend %border-bottom-radius
      }
    }
  }
}
</style>