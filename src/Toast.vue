<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluToast',
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$line-height: 1.8;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$toast-color: white;
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  line-height: $line-height;
  height: $toast-height;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background: $toast-bg;
  color: $toast-color;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
}
</style>