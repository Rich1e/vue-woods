<template>
  <div>
    <div class="ui-mask"></div>
    <div class="ui-dialog" :style="{top: top}">
      <div class="miui-dialog-area">
        <div
            class="ui-dialog-hd"
            :style="{backgroundColor: titleBg, color: titleColor}">
          {{title}}
        </div>
        <div class="ui-dialog-bd wordWrap">
          {{content}}
          <slot name="content"></slot>
        </div>
      </div>
      <div class="ui-dialog-ft alert"
           v-if="type == 'alert'"
           @click="dispatchEvent('alert')"
           :style="{backgroundColor: alertBg, color: alertColor}">
        {{alert}}
      </div>
      <div class="ui-dialog-ft dialog clearfix" v-if="type == 'dialog'">
        <a class="ui-dialog-btn primary"
           @click="dispatchEvent('primary')"
           :style="{backgroundColor: primaryBg, color: primaryColor}">
          {{primary}}
        </a>
        <a class="ui-dialog-btn secondary"
           @click="dispatchEvent('secondary')"
           :style="{backgroundColor: secondaryBg, color: secondaryColor}">
          {{secondary}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ui-dialog',
    props: {
      top: String,
      title: String,
      titleColor: String,
      titleBg: String,
      content: String,
      type: {
        type: String,
        default: 'alert'
      },
      alert: String,
      alertBg: String,
      alertColor: String,
      primary: String,
      primaryBg: String,
      primaryColor: String,
      secondary: String,
      secondaryBg: String,
      secondaryColor: String
    },
    methods: {
      dispatchEvent (name, event) {
        this.$emit(name, event)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../stylesheet/variables.scss';
  @import '../../stylesheet/setonepx.scss';

  $dialogWidth: 295;

  .ui-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: r($dialogWidth);
    height: auto;
    z-index: 1999;
    border-radius: r(6);
    overflow: hidden;

    .miui-dialog-area {
      padding: 0 r(16);
      background-color: $contentBaseColor;
    }

    .ui-dialog-hd {
      padding: r(15) 0 r(10) 0;
      background-color: $contentBaseColor;
      font-size: r($mainBtnSize);
      text-align: center;
      color: $secondaryTextColor;
      overflow: hidden;
    }

    .ui-dialog-bd {
      padding-bottom: r(25);
      background-color: $contentBaseColor;
      overflow: hidden;
      text-align: center;
      font-size: r($normalSize);
      color: $secondaryTextColor;
    }

    .ui-dialog-ft {
      position: relative;
      height: r(48);
      line-height: r(48);
      color: #FFFFFF;
      text-align: center;
      border: none;
      background-color: $baseColor;
      overflow: hidden;
      font-size: r($mainBtnSize);

      &.alert {
        &:before {
          @extend .setTopLine;
        }
      }

      &.dialog {
        position: relative;

        a.ui-dialog-btn {
          position: relative;
          float: left;
          width: 50%;
          height: r(48);
          display: block;

          &:before {
            @extend .setTopLine;
          }
        }

        .default {
          color: $secondaryTextColor;
          background-color: $contentBaseColor;
        }

        .primary {
          color: $secondaryTextColor;
          background-color: $contentBaseColor;
        }

        .secondary {
          color: $contentBaseColor;
          background-color: $baseColor;
          &:before {
            display: none;
          }
        }
      }
    }
  }
</style>
