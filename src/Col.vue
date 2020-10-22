<template>
  <div class="col" :class="colClass"
       :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
// let validator = (value) => {
//   let keys = Object.keys(value)
//   let valid = true
//   keys.forEach(key => {
//     if (!['span', 'offset'].includes(key)) {
//       valid = false
//     }
//   })
//   return valid
// }
export default {
  name: 'GuluCol',
  props: {
    span: {type: String | Number,},
    offset: {type: String | Number,},
    // phone: {
    //   type: Object,
    // validator(value) {
    //   let keys = Object.keys(value)
    //   let valid = true
    //   keys.forEach(key => {
    //     if (!['span', 'offset'].includes(key)) {
    //       valid = false
    //     }
    //   })
    //   return valid
    // }
    // },
    // iPad: {type: Object, validator},
    // narrowPc: {type: Object, validator},
    // pc: {type: Object, validator},
    // widePc: {type: Object, validator},
  },
  data() {
    return {
      gutter: 0,
    }
  },
  computed: {
    colClass() {
      let {span, offset, phone, iPad, narrowPc, pc, widePc} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        // phone.span && `col-phone-${phone.span}`,
        // phone.offset && `offset-phone-${phone.offset}`,
        // iPad.span && `col-phone-${iPad.span}`,
        // iPad.offset && `offset-phone-${iPad.offset}`,
        // narrowPc.span && `col-phone-${narrowPc.span}`,
        // narrowPc.offset && `offset-phone-${narrowPc.offset}`,
        // pc.span && `col-phone-${pc.span}`,
        // pc.offset && `offset-phone-${pc.offset}`,
        // widePc.span && `col-phone-${widePc.span}`,
        // widePc.offset && `offset-phone-${widePc.offset}`,
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
  white-space: nowrap;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%;
    }
  }
  @media (max-width: 576px) {
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
  @media (min-width: 577px) {
    $class-prefix: col-iPad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-iPad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
  @media (max-width: 769px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
  @media (max-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
  @media (max-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
}
</style>