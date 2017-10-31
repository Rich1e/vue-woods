<template>
  <a
      class="ui-action-item"
      :href="href"
      @click="handleClick"
      :style="{color: color}">
    {{item}}
  </a>
</template>

<script>
  export default {
    props: {
      href: String,
      color: String,
      item: String
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
</style>
