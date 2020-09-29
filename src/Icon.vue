<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"/>
  </svg>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss" scoped>
.g-icon {
  height: 1em;
  width: 1em;
}
</style>