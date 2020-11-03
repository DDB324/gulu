<template>
  <div class="tabs-item" :data-name="name" :class="classes" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsItem',
  inject: ['eventBus'],
  computed: {
    classes() {
      return {active: this.active, disabled: this.disabled}
    }
  },
  data() {
    return {
      active: false,
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true
    }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (name) => {
        this.active = this.name === name
      })
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return
      }
      if (this.eventBus) {
        this.eventBus.$emit('update:selected', this.name, this)
      }
      this.$emit('click', this)
    }
  },
}
</script>

<style lang="scss" scoped>
$blue: blue;
$color-disabled: gray;
.tabs-item {
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  &.active {
    color: $blue;
    font-weight: bolder;
    position: relative;
  }

  &.disabled {
    color: $color-disabled;
    font-weight: normal;
    cursor: not-allowed;
  }
}
</style>