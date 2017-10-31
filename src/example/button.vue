<template>
  <div class="page">
    <ui-button text="下一步" type="large" @click="showAction" margin-top="23"
               margin-bottom="10"></ui-button>
    <ui-button text="完成" type="middle" @click="showDialog" margin-top="23" margin-bottom="10"></ui-button>
    <ui-button text="确定" type="small" @click="showAlert" margin-top="23"></ui-button>
    <ui-button text="确定" bg-color="red" type="small" @click="showAlert" margin-top="23"></ui-button>
    <ui-button text="确定" bg-color="green" type="small" @click="showAlert" margin-top="23"></ui-button>
    <ui-button text="确定" bg-color="blue" type="small" @click="showAlert" margin-top="23"></ui-button>
    <ui-button text="确定" bg-color="orange" type="small" @click="showAlert" margin-top="23"></ui-button>
    <ui-dialog
        v-show="dialogShow"
        type="dialog"
        alert="确定"
        title="提示"
        content="Dialog"
        primary="取消"
        secondary="确定"
        alert-bg="#fff"
        alert-color="#636363"
        @primary="hideDialog"
        @secondary="hideDialog">
    </ui-dialog>
    <ui-dialog
        v-show="alertShow"
        type="alert"
        title="提示"
        alert="确定"
        content="Alert"
        alert-bg="#fff"
        alert-color="#636363"
        @alert="hideAlert">
    </ui-dialog>
    <action :show.sync="actionShow" btn="取消" @click="hideAction">
      <action-item item="item1" href="http://www.baidu.com" @click="itemClick(1)"></action-item>
      <action-item item="item2" @click="itemClick(2)"></action-item>
    </action>
  </div>
</template>

<script>
  import {
    UiButton,
    UiDialog,
    Action,
    ActionItem
  } from '../components/index.js'

  export default {
    components: {
      UiButton,
      UiDialog,
      Action,
      ActionItem
    },
    data () {
      return {
        value: '测试',
        actionShow: false,
        dialogShow: false,
        alertShow: false,
        disabled: true
      }
    },
    methods: {
      showAction () {
        this.actionShow = true
      },
      hideAction () {
        this.actionShow = false
      },
      showDialog () {
        this.dialogShow = true
      },
      hideDialog () {
        this.dialogShow = false
      },
      showAlert () {
        this.alertShow = true
      },
      hideAlert () {
        this.alertShow = false
      },
      itemClick (i) {
        console.log(111111)
      }
    }
  }
</script>
