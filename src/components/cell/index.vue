<template>
  <div class="ui-cell" @click="handleClick('click')" :style="{height: height + 'px'}">
    <div class="ui-cell-hd wordWrap">
      <p v-if="title" :class="{'fixed-width': hdFixed}">{{title}}</p>
      <slot name="title"></slot>
    </div>
    <div class="ui-cell-bd ui-cell-primary">
      <p v-if="type == ''">{{value}}</p>
      <input
          v-if="type == 'input'"
          class="ui-input"
          :type="inputType"
          :readonly="readonly"
          :placeholder="placeholder"
          :maxlength="maxLength"
          :value="value"
          @input="updateValue('input', $event)"
          @click="$emit('input-click', handleEvent)"
          @focus="$emit('input-focus', handleEvent)"
          @blur="$emit('input-blur', handleEvent)"
          @keyup.delete="$emit('input-delete', handleEvent)"
          @paste="$emit('input-paste', handleEvent)"
      />
      <slot name="value"></slot>
    </div>
    <div class="ui-cell-ft wordWrap">
      <p v-if="right||link" :class="{'fixed-width': ftFixed}">{{right}}  <span v-if="link">></span></p>
      <slot name="right"></slot>
    </div>
    <slot name="cell"></slot>
  </div>
</template>

<script>
  export default {
    name: 'ui-cell',
    props: {
      hdFixed: Boolean,
      ftFixed: Boolean,
      height: String,
      title: String,
      value: {
        type: [String, Number],
        default: ''
      },
      type: {
        type: String,
        default: ''
      },
      placeholder: String,
      readonly: {
        type: Boolean,
        dafault: false
      },
      maxLength: String,
      inputType: {
        type: String,
        default: 'text'
      },
      right: String,
      link: String
    },
    methods: {
      updateValue (event, $event) {
        this.$emit(event, $event.target.value)
      },
      handleEvent (event) {
        this.$emit(event)
      },
      handleClick (event) {
        if (this.link) {
          this.$router.push(this.link)
        }
        else {
          this.$emit('click', event)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../stylesheet/variables.scss';
  @import '../../stylesheet/setonepx.scss';

  //cells高度
  $cellHeight: 55;

  //cell 内边距
  $cellPadding: 15;
  //cell左右外边距
  $cellMargin: 16;

  //cell-hd 最小宽度
  $hdMinWidth: 65;
  //cell 高度
  $hdHeight: 30;

  .ui-cell {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: r($cellMargin);
    padding-right: r($cellMargin);
    height: r($cellHeight);
    color: $secondaryTextColor;
    overflow: hidden;
    font-size: r($normalSize);

    &:before {
      @extend .setTopLine;
    }

    &:first-child {
      &:before {
        display: none;
      }
    }

    .ui-input {
      width: 100%;
      height: r($hdHeight);
      font-size: r($normalSize);
      line-height: r($hdHeight);
      color: $secondaryTextColor;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    input.ui-input::-webkit-input-placeholder,
    textarea.ui-input::-webkit-input-placeholder {
      color: $hintTextColor;
    }

    .fixed-width {
      width: r($hdMinWidth);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .ui-cell-hd {
      padding-right: r(15);
      line-height: r($hdHeight);
      > p {
        min-width: r($hdMinWidth);
      }
    }

    .ui-cell-bd {
      width: 100%;
      color: $hintTextColor;
      line-height: r($hdHeight);
      overflow: hidden;
      > p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    .ui-cell-primary {
      flex: 1;
    }

    .ui-cell-second {
      flex: 2;
    }

    .ui-cell-third {
      flex: 3;
    }

    .ui-cell-ft {
      padding-left: r(10);
      color: $supportTextColor;
      line-height: r($hdHeight);
      text-align: right;
      > p {
        min-width: r($hdMinWidth);
      }
    }
  }
</style>
