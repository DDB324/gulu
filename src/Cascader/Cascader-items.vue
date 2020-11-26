<template>
  <div class="cascaderItems">
    <div class="left">
      <div class="label" v-for="item in sourceItem" @click="leftSelected=item">
        {{ item.name }}
        <g-icon class="icon" name="next" v-if="item.children"></g-icon>
      </div>
    </div>
    <div class="right" v-if="rightSelected">
      <GuluCascaderItem :source-item="rightSelected"></GuluCascaderItem>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluCascaderItem',
  computed: {
    rightSelected() {
      return this.leftSelected && this.leftSelected.children ? this.leftSelected.children : null;
    }
  },
  props: {
    sourceItem: {
      type: Array,
    }
  },
  data() {
    return {
      leftSelected: null,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/helper";

.cascaderItems {
  height: 100%;
  display: flex;

  .left {
    padding-top: 5px;

    .label {
      padding: 5px 12px;
      @extend %flex-center;

      .icon {
        margin-left: .5em;
        transform: scale(0.8);
      }
    }
  }

  .right {
    border-left: 1px solid #f0f0f0;
  }
}
</style>