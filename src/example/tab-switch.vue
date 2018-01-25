<template>
  <div id="app">
    <tab-switch :tabtitles="tabtitles" :currPage="1">
      <div class="tab-content-container">
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
        <div>tab-switch 1</div>
      </div>
      <div class="tab-content-container">
        <div>tab-switch 2</div>
        <div>tab-switch 2</div>
        <div>tab-switch 2</div>
        <div>tab-switch 2</div>
        <div>tab-switch 2</div>
        <div>tab-switch 2</div>
        <div>tab-switch 2</div>
        <div>tab-switch 2</div>
        <div>tab-switch 2</div>
      </div>
      <div class="tab-content-container">
        <div>tab-switch 3</div>
        <div>tab-switch 3</div>
        <div>tab-switch 3</div>
        <div>tab-switch 3</div>
        <div>tab-switch 3</div>
        <div>tab-switch 3</div>
        <div>tab-switch 3</div>
        <div>tab-switch 3</div>
        <div>tab-switch 3</div>
      </div>
      <div class="tab-content-container">
        <div>tab-switch 4</div>
        <div>tab-switch 4</div>
        <div>tab-switch 4</div>
        <div>tab-switch 4</div>
        <div>tab-switch 4</div>
        <div>tab-switch 4</div>
        <div>tab-switch 4</div>
        <div>tab-switch 4</div>
        <div>tab-switch 4</div>
      </div>
    </tab-switch>
  </div>
</template>
<script>
  import {
    TabSwitch
  } from '../components/index.js'

  export default {
    components: {
      TabSwitch
    },
    data () {
      return {
        'tabtitles': ['bajian', 'github', 'bajian', 'github']
      }
    }
  }
</script>
<style>
  html {
    height: 100%;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  .tab-content-container {
    width: 99%;
    height: 200px;
    margin: 0px auto;
  }

  #app {
    color: #2c3e50;
    max-width: 500px;
    width: 100%;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    margin: 0 auto
  }

  img {
    width: 98%
  }

</style>