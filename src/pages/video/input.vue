<template>
    <div class="contain">
        <div class="imputcontain">
            <van-cell-group inset>
                <van-field :model-value=name readonly />
            </van-cell-group>
        </div>
        <van-button type="primary" class="button" @click="select">选择</van-button>
    </div>
</template>

<script setup lang="ts" >
import emitter from "../../utils/bus"
import { ref } from "vue"
let name = ref("请选择位置")



const select = async()=>{
    emitter.emit('selectposition', {flag:true})
}

// const selectname = async()=>{
//     emitter.emit('selectname',{name:" "})
// }




</script>

<style  lang="scss" scoped>
.contain {
    display: flex;
    justify-content: space-between;

    .imputcontain {
        background-color: white;
        width: 70vw;
        border-radius: 5%;
        position: relative;
        top: 10px;
        margin-left: 10px;
    }

    .button {
        position: relative;
        top: 10px;
        margin-right: 10px;
    }
}
</style>