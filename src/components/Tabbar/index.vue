<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" replace to="/home">状态</van-tabbar-item>
            <!-- <van-tabbar-item icon="play-circle-o" to="/video">视频</van-tabbar-item> -->
            <van-tabbar-item icon="bulb-o" to="/waring" :badge="tableData.length">警告</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/setting">设置</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup lang="ts">
import { ref ,computed } from 'vue';
import ThingStore from "@/store/modules/thing"
let USEThingStore = ThingStore()

let tableData = ref<any>([])


const waringdata = computed(() => USEThingStore.$state.waringdata);

tableData = ref(waringdata.value);




const active = ref(0);

</script>

<style scoped></style>