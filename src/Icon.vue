<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"/>
  </svg>
</template>

<script>
import './svg.js'

export default {
  name: 'GuluIcon',
  props: ['name']
}
</script>

<style lang="scss" scoped>
.g-icon {height: 1em;width: 1em;}
</style>