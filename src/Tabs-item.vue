<template>
  <div class="tabs-item" :class="classes" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsItem',
  inject: ['eventBus'],
  computed: {
    classes() {
      return {active: this.active}
    }
  },
  data() {
    return {
      active: {
        type: Boolean,
        default: false
      }
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
    this.eventBus.$on('update:selected', (name) => {
      this.active = this.name === name
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs-item {
  padding: 0 1em;

  &.active {
    background: red;
  }
}
</style>