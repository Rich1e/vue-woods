<template>
<div>
    <group title="标题" type="hint"></group>
    <group title="标题"></group>
    <group gutter="10">
        <cell title="标题" :value="value" height="90"></cell>
        <cell title="标题" value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"></cell>
        <cell title="标题" value="内容" right="说明文字"></cell>
        <cell title="标题标题标题标题标题标题标题标题标题标题标题标题" :hd-fixed="true" value="内容" right="说明" link="demos"></cell>
        <cell title="标题标题标题标题标题标题标题标题标题标题标题标题" value="内容" right="说明文字"></cell>
        <cell title="标题" value="内容" :ft-fixed="true" right="说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字"></cell>
        <cell
            title="标题"
            type="input"
            placeholder="请输入内容"
            v-model="value"
            @input-blur="test()"
            right="说明文字">
        </cell>
        <cell
            title="标题"
            type="input"
            placeholder="请输入内容"
            value="测试内容">
        </cell>
        <cell
            title="标题"
            type="input"
            :readonly="true"
            placeholder="请输入内容">
            <mi-button slot="right" text="获取验证码" type="get-code"></mi-button>
        </cell>
    </group>
</div>
</template>

<script>
import {
    Group,
    Cell,
    UiButton
} from '../components/index.js';

export default {
    components: {
        Group,
        Cell,
        MiButton: UiButton
    },
    data () {
        return {
            value: '测试'
        }
    },
    methods: {
        test () {
            window.console.log(111)
        }
    }
}
</script>
