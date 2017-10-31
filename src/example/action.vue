<template>
  <div class="page">
    <ui-button text="Action" type="large" @click="showAction" margin-top="23"></ui-button>
    <action :show.sync="actionShow" btn="取消" @click="hideAction">
      <action-item item="item1" href="http://www.baidu.com" @click="itemClick(1)"></action-item>
      <action-item item="item2" @click="itemClick(2)"></action-item>
    </action>
  </div>
</template>
<script>
  import {
    UiButton,
    Action,
    ActionItem
  } from '../components/index.js'

  export default {
    components: {
      UiButton,
      Action,
      ActionItem
    },
    data () {
      return {
        actionShow: false
      }
    },
    methods: {
      showAction () {
        this.actionShow = true
      },
      hideAction () {
        this.actionShow = false
      },
      itemClick (i) {
        alert(i)
      }
    }
  }
</script>
