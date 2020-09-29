<template>
  <div>
    <button class="g-button">按钮</button>
  </div>
</template>

<script lang='ts'>
export default {};
</script>

<style lang='scss' scoped>
.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em; /*没有写宽度，把按钮的宽度写死是不好的*/
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);

  &:hover {
    border-color: var(--border-color-hover)
  }

  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}


</style>