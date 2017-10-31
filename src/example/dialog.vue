<template>
<div class="page">
    <mi-button text="Dialog" type="middle" @click="showDialog" margin-top="23" margin-bottom="10"></mi-button>
    <mi-button text="Alert" type="small" @click="showAlert"></mi-button>
    <mi-dialog
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
    </mi-dialog>
    <mi-dialog
        v-show="alertShow"
        type="alert"
        title="提示"
        alert="确定"
        content="Alert"
        alert-bg="#fff"
        alert-color="#636363"
        @alert="hideAlert">
    </mi-dialog>
</div>
</template>

<script>
import {
    UiButton,
    UiDialog
} from '../components/index.js';

export default {
    components: {
        MiButton: UiButton,
        MiDialog: UiDialog
    },
    data () {
        return {
            dialogShow: false,
            alertShow: false
        }
    },
    beforeRouteEnter (to, from, next) {
        next()
    },
    methods: {
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
        }
    }
}
</script>
