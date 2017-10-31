<template>
  <div v-if="type"
       :class="className"
       :style="{backgroundColor: bgColor, color: color, width: width, height: height, marginTop: marginTop + 'px', marginBottom: marginBottom + 'px'}"
       @click="handleClick('click')">
    <slot></slot>
    {{text}}
  </div>
</template>

<script>
  export default {
    name: 'ui-button',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      width: String,
      height: String,
      color: String,
      icon: String,
      text: [String, Number],
      marginTop: String,
      marginBottom: String,
      bgColor: String,
      type: {
        type: String,
        default: 'large'
      }
    },
    computed: {
      className () {
        let isAllowed = ''
        if (this.disabled) {
          isAllowed = ' not-allowed'
        }
        if (this.type === '') {
          return 'ui-button ui-large-btn' + isAllowed
        }
        return `ui-button ui-${this.type}-btn` + isAllowed
      }
    },
    methods: {
      handleClick (event) {
        if (!this.disabled) {
          this.$emit('click', event)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../stylesheet/variables.scss';

  //btn高度
  $btnHeight: 45;
  //btn左右外边距
  $btnMargin: 16;
  //btn上外边距
  $btnMarginTop: 23;

  .ui-btn {
    position: relative;
    text-align: center;
    height: r($btnHeight);
    line-height: r($btnHeight);
    border-radius: r(2);
    font-size: r($mainBtnSize);
  }

  .ui-button.not-allowed {
    cursor: not-allowed;
    background-color: $hintTextColor;
  }

  .ui-large-btn {
    color: #FFFFFF;
    background-color: $baseColor;

    @extend .ui-btn;
  }

  .ui-middle-btn {
    color: #FFFFFF;
    background-color: $baseColor;
    width: r(250);

    @extend .ui-btn;
  }

  .ui-small-btn {
    color: #FFFFFF;
    background-color: $baseColor;
    width: r(120);

    @extend .ui-btn;
  }

  //获取验证码
  .ui-get-code-btn {
    color: #FFFFFF;
    background-color: $iconColor;
    text-align: center;
    height: r(30);
    line-height: r(30);
    margin-top: 0;
    font-size: r(13);
    padding: 0 r(10);
    border-radius: r(5);
  }
</style>
