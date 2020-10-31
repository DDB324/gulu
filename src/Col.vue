<template>
  <div class="col" :class="colClass"
       :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach((key) => {
    if (!['span', 'offset'].indexOf(key)>=0) {
      valid = false
    }
  })
  return valid
}
export default {
  name: 'GuluCol',
  props: {
    span: {type: [String , Number],},
    offset: {type: [String , Number],},
    iPad: {type: Object, validator,},
    narrowPc: {type: Object, validator,},
    pc: {type: Object, validator,},
    widePc: {type: Object, validator,},
  },
  data() {
    return {
      gutter: 0,
    }
  },
  methods: {
    createClasses(obj, str = '') {
      if (!obj) {
        return []
      }
      let arr = []
      if (obj.span) {
        arr.push(`col-${str}${obj.span}`)
      }
      if (obj.offset) {
        arr.push(`offset-${str}${obj.offset}`)
      }
      return arr
    }
  },
  computed: {
    colClass() {
      let {span, offset, iPad, narrowPc, pc, widePc, createClasses} = this//默认span为手机
      return [
        ...createClasses({span, offset}),
        ...createClasses(iPad, 'iPad-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(widePc, 'wide-pc-')
      ]
    },
    colStyle() {
      let {gutter} = this
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  @for $i from 0 through 24 {
    &.#{$class-prefix}#{$i} {
      width: ($i/24)*100%;
    }
  }
  $class-prefix: offset-;
  @for $i from 0 through 24 {
    &.#{$class-prefix}#{$i} {
      margin-left: ($i/24)*100%;
    }
  }
  @media (min-width: 576px) {
    $class-prefix: col-iPad-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i/24)*100%;
      }
    }
    $class-prefix: offset-iPad-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i/24)*100%;
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix: col-narrow-pc-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i/24)*100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i/24)*100%;
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix: col-pc-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i/24)*100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i/24)*100%;
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix: col-wide-pc-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        width: ($i/24)*100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $i from 0 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: ($i/24)*100%;
      }
    }
  }
}
</style>