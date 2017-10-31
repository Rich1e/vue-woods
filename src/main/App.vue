<template>
  <div>
    <ui-header v-show="isShowHeader" fixed :title="thisTitle">
      <router-link to="/" slot="left">
        <ui-button type="small" style="font-size: 14px;width:50px;margin:0;height:30px;line-height:30px;"
                   @click="handleBack">back
        </ui-button>
      </router-link>
    </ui-header>
    <router-view class="ui-wrapper" v-bind:class="{ none: !isShowHeader}"></router-view>
  </div>
</template>
<script>
  import {
    UiButton,
    UiHeader
  } from '../components/index.js'

  export default {
    components: {
      UiButton,
      UiHeader
    },
    watch: {
      '$route': 'getShow'
    },
    data () {
      return {
        isShowHeader: false,
        thisTitle: 'Vue-woods'
      }
    },
    methods: {
      handleBack () {
        history.go(-1)
      },
      getShow: function () {
        if (this.$route.path === '/' || this.$route.path === '/ui-header') {
          this.isShowHeader = false
        } else {
          this.isShowHeader = true
          this.thisTitle = this.$route.path.slice(1)
        }
      }
    }
  }
</script>
<style>
  .ui-wrapper {
    padding-top: 40px;
  }

  .ui-wrapper.none {
    padding-top: 0;
  }
</style>
