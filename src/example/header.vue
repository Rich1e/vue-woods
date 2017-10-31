<template>
    <div>
        <mi-header fixed title="固定在顶部" />
        <cell></cell>
        <mi-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <router-link to="/" slot="left">
                <mi-button type="small" style="width:50px;margin:0;height:30px;line-height:30px;" @click="handleBack">返回</mi-button>
            </router-link>
        </mi-header>
        <cell></cell>
        <mi-header title="右侧仅文字">
            <router-link to="/" slot="right">
                <mi-button type="small" style="width:50px;margin:0;height:30px;line-height:30px;" @click="handleBack">分享</mi-button>
            </router-link>
        </mi-header>
        <cell></cell>
        <mi-header title="">
            <router-link to="/" slot="left">
                <mi-button type="small" style="width:50px;margin:0;height:30px;line-height:30px;" @click="handleBack">返回</mi-button>
            </router-link>
            <router-link to="/" slot="right">
                <mi-button type="small" style="width:50px;margin:0;height:30px;line-height:30px;" @click="handleBack">分享</mi-button>
            </router-link>
        </mi-header>
    </div>
</template>
<style>
</style>
<script>
import {
    Cell,
    UiButton,
    UiHeader
} from '../components/index.js';

export default {
    components: {
        Cell,
        MiButton: UiButton,
        MiHeader: UiHeader
    },
    data() {
        return {}
    },
    methods: {
        handleBack() {
            history.go(-1);
        }
    }
}
</script>
