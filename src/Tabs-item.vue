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
$blue: blue;
$color-disabled: gray;
.tabs-item {
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  &.active {
    background: red;
  }
}
</style>