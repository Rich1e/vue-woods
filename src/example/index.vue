<template>
  <div>
    <h2 class="title">Vue-woods</h2>
    <group title="JS Components" type="hint">
      <cell title="Toast" link="toast"></cell>
      <cell title="Action Sheet" link="action"></cell>
      <cell title="Dialog" link="dialog"></cell>
      <cell title="Picker" link="picker"></cell>
      <cell title="Calendar" link="calendar"></cell>
      <cell title="Indicator" link="indicator"></cell>
      <cell title="Index List" link="indexlist"></cell>
      <cell title="Palette Button" link="palettebutton"></cell>
      <cell title="Progress" link="progress"></cell>
      <cell title="Swipe" link="swipe"></cell>
      <cell title="Scroll" link="scroll"></cell>
      <cell title="Popup" link="popup"></cell>
      <cell title="Range" link="range"></cell>
      <cell title="LazyLoad" link="lazyload"></cell>
    </group>
    <group title="CSS Components" type="hint">
      <cell title="Header" link="header"></cell>
      <cell title="Tabbar" link="tabbar"></cell>
      <cell title="Navbar" link="navbar"></cell>
      <cell title="Button" link="button"></cell>
      <cell title="Cell" link="cell"></cell>
      <cell title="Cell Swipe" link="cellswipe"></cell>
      <cell title="Tab Container" link="tabcontainer"></cell>
      <cell title="Spinner" link="spinner"></cell>
      <cell title="Search" link="search"></cell>
    </group>
    <group title="Form Components" type="hint">
      <cell title="Switch" link="switch"></cell>
      <cell title="Checklist" link="checklist"></cell>
      <cell title="Radio" link="radio"></cell>
      <cell title="Field" link="field"></cell>
      <cell title="Badge" link="badge"></cell>
    </group>
    <group title="Advanced Components" type="hint">
      <cell title="Tab Switch" link="tabSwitch"></cell>
    </group>
  </div>
</template>
<style lang="scss">
  @import '../stylesheet/variables.scss';
  @import '../stylesheet/variables.scss';

  //group-title 高度
  $groupTitle: 43;
  //group左右外边距
  $groupMargin: 16;
  .title {
    font-size: $lessTitleSize;
    text-align: left;
    padding: r($groupMargin);
    overflow: hidden;
    text-overflow: ellipsis;
    background: $baseColor;
    color: $contentBaseColor;
  }
</style>
<script>
  import {
    Group,
    Cell
  } from '../components/index.js'

  export default {
    components: {
      Group,
      Cell
    }
  }
</script>
