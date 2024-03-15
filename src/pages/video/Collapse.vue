<template>
    <div class="contain">
        <van-dialog v-model:show="show" title="请选择位置" show-cancel-button :before-close="beforeClose">
            <div class="vanlist">
                <van-area title="" :area-list="areaList" confirm-button-text="" cancel-button-text="" option-height="25px"
                    v-model="list" />
            </div>
        </van-dialog>
    </div>
</template>

<script setup lang="ts">
import emitter from "../../utils/bus"
import { ref } from 'vue';
let list = ref("请选择位置")

let show = ref(false);
let areaList = {
    province_list: {
        110000: 'A楼',
        120000: 'B楼',
    },
    city_list: {
        110100: '1楼',
        110200: '2楼',
        120100: '1楼',
        120200: '2楼',
    },
    county_list : {
        110101: '1号',
        110102: '2号',
    },
}

const beforeClose: any = async (action: any) => {
    if (action === 'confirm') {
        // 确认
        confirm();

    } else if (action === 'cancel') {
        // 取消
        cancel();
    }
}
const cancel = async () => {
    console.log('取消修改');
    show.value = false;
}

const confirm = async () => {

    console.log(list);
    show.value = false;
}



emitter.on('selectposition', (data: any) => {
    show.value = data.flag
})

</script>

<style  lang="scss" scoped>
.contain {
    width: 10vw;
    height: 20vh;
}

.vanlist {
    height: 25vh;
}
</style>