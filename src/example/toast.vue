<template>
  <div class="page">
    <mi-button text="toast" type="large" @click="showToast" margin-top="23"></mi-button>
    <toast :msg="toastMsg" :time="2000" @on-hide="hideToast"></toast>
  </div>
</template>
<style>
</style>
<script>
  import {
    Toast,
    UiButton
  } from '../components/index'

  export default {
    data () {
      return {
        toastMsg: ''
      }
    },
    components: {
      Toast,
      MiButton: UiButton
    },
    methods: {
      showToast () {
        this.toastMsg = '提示信息'
      },
      hideToast () {
        this.toastMsg = ''
      }
    }
  }
</script>
