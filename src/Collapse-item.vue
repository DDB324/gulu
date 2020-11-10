<template>
  <div class="collapse-item" :class="{open:currentOpen}" @click="triggerOpen">
    <div class="title">
      {{ title }}
    </div>
    <div class="content" v-if="currentOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluCollapseItem',
  data() {
    return {
      currentOpen: this.open
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    open: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    triggerOpen() {
      this.currentOpen = !this.currentOpen
    }
  }
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
    cursor: grab;
    border-bottom: none;
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