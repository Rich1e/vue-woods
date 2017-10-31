<template>
  <div :style="{display: show ? 'block' : 'none'}">
    <div class="ui-mask"></div>
    <div class="ui-action" :class="{'ui-action-toggle': show}">
      <div class="ui-action-group">
        <slot></slot>
      </div>
      <a class="ui-action-btn" @click="handleClick" :style="{color: color}">
        {{btn}}
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      show: Boolean,
      color: String,
      btn: String
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>
<style lang="scss">
  @import '../../stylesheet/variables.scss';
  @import '../../stylesheet/setonepx.scss';

  .ui-action {
    position: fixed;
    bottom: 0;
    left: r(16);
    right: r(16);
    z-index: 1999;
    transform: translate(0, 100%);
    transition: transform .3s;
    &.ui-action-toggle {
      bottom: r(10);
      transform: translate(0, 0);
    }
    .ui-action-style {
      height: r(52);
      background-color: #fff;
      border-radius: r(5);
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: r($normalSize);
    }
    .ui-action-group {
      border-radius: r(5);
      overflow: hidden;
      .ui-action-item {
        position: relative;
        display: block;
        height: r(52);
        line-height: r(52);
        background-color: #fff;
        text-align: center;
        color: $baseColor;
        font-size: r($normalSize);
        &:before {
          @extend .setTopLine;
        }
        &:first-child:before {
          display: none;
        }
      }
    }
    .ui-action-btn {
      display: block;
      text-align: center;
      margin-top: r(12);
      color: $alertColor;
      line-height: r(52);
      @extend .ui-action-style;
    }
  }
</style>
