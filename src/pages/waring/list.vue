<template>
    <div>
        <el-table :data="tableData" height="80vh" style="width: 100wv">
            <el-table-column prop="time" label="时间" width="100" />
            <el-table-column prop="style" label="类型" width="90" />
            <el-table-column prop="status" label="状态" width="88" />
            <el-table-column prop="place" label="地点" width="150" />
            <el-table-column fixed="right" label="操作" width="80">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click.prevent="todata(scope.$index)">
                        操作
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <van-popup v-model:show="showBottom" round position="bottom" :style="{ height: '80%' }">
        <div class="dalog">
            <el-descriptions title="" :column="1" border>
                <el-descriptions-item label="时间" align="center" class-name="my-content" width="1px">{{
                    tableData[showindex].time }}</el-descriptions-item>
                <el-descriptions-item label="类型" align="center" class-name="my-content" width="1px">{{
                    tableData[showindex].style }}</el-descriptions-item>
                <el-descriptions-item label="状态" align="center" class-name="my-content" width="1px">{{
                    tableData[showindex].status }}</el-descriptions-item>
                <el-descriptions-item label="地点" align="center" class-name="my-content" width="1px">{{
                    tableData[showindex].place }}</el-descriptions-item>
            </el-descriptions>
            <div class="title">
                <a>预警图片</a>
            </div>
            <van-image width="100wv" src="/src/assets/1.png" style="padding-top: 10px;" v-show="tableData[showindex].style == '火灾'" />
            <van-image width="100wv" src="/src/assets/2.png" style="padding-top: 10px;" v-show="tableData[showindex].style == '吸烟'" />
            <div class="button"><van-button type="primary" @click="handleClick">处理</van-button></div>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
import { getwaringdata } from "@/api/login/index"
import { ref, onMounted, computed } from 'vue';

import ThingStore from "@/store/modules/thing"

let USEThingStore = ThingStore()

let showBottom = ref(false);

let showindex = ref(0)

onMounted(() => {
    Getwaringdata
})

let tableData = ref<any>([])

const todata = async (index: any) => {
    showBottom.value = true;
    showindex = index
}

const Getwaringdata = async () => {
    tableData.value = await getwaringdata()
}

const computedTableData = computed(() => USEThingStore.$state.waringdata);
tableData = ref(computedTableData.value);

const handleClick = async () => {
    USEThingStore.$state.waringdata.splice(showindex.value, 1)
    showBottom.value = false;
}


</script>

<style scoped>
.dalog {
    padding-top: 20px;

    .title {
        text-align: center;
        padding-top: 20px;
    }

    .button {
        padding-top: 10vh;
        padding-left: 40vw;
    }
}
</style>