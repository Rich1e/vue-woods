<template>
  <div v-show="show" class="ui-toast">{{msg}}</div>
</template>
<style lang="scss" scoped>
  .ui-toast {
    position: fixed;
    z-index: 3;
    padding: 0 10px;
    min-width: 180px;
    font-size: 14px;
    line-height: 35px;
    top: 180px;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: rgba(40, 40, 40, .75);
    text-align: center;
    white-space: nowrap;
    border-radius: 2px;
    color: #fff;
  }
</style>
<script>
  export default {
    name: 'toast',
    data () {
      return {
        show: false
      }
    },
    props: {
      msg: {
        type: String
      },
      time: {
        type: Number,
        default: 2000
      }
    },
    watch: {
      msg (val) {
        if (val) {
          this.show = true
          clearTimeout(this.timeout)
          this.timeout = setTimeout(() => {
            this.show = false
            this.$emit('on-hide')
          }, this.time)
        }
      }
    }
  }
</script>
