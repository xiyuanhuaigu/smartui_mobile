<template>
    <div class="container">
        <Swipe></Swipe>
        <van-tabs v-model:active="active">
            <van-tab title="基本信息">
                <roundedchar :waringstyle = processedData></roundedchar>\

            </van-tab>
            <van-tab title="报警监控">
                <Bar :waringtime = TimeData ></Bar>
            </van-tab>
            <van-tab title="地点统计">
                <piechart :waringplace = PlaceData></piechart>
            </van-tab>
        </van-tabs>
        <div class="bottom">
            <cricle></cricle>
            <criclew></criclew>
        </div>
    </div>
</template>

<script setup lang="ts">
let TimeData = ref<any>()
import { ref, computed , onMounted } from "vue";
import roundedchar from "./Roundedchat.vue"
import Swipe from "./swipe.vue"
import Bar from "./bar.vue"
import piechart from "./piechart.vue"
import cricle from "./cricle.vue";
import criclew from "./criclewaring.vue"
const active = ref(0);
import ThingStore from "@/store/modules/thing"
let USEThingStore = ThingStore()

let tableData = ref<any>([])
let processedData = ref<any>([])
let PlaceData = ref<any>([])
let waringtime = ref<any>();


onMounted(() => {
    TimeFunction()
})



const waringdata = computed(() => USEThingStore.$state.waringdata);
tableData = ref(waringdata.value);

processedData = computed(() => tableData.value.reduce((acc: any, curr: any) => {
    const existingItem = acc.find((item: { name: any; }) => item.name === curr.style);
    if (existingItem) {
        existingItem.value++;
    } else {
        acc.push({ value: 1, name: curr.style });
    }
    return acc;
}, []))



PlaceData = tableData.value.reduce((acc: { value: number; name: any; }[], curr: { place: any; }) => {
    if (curr.place) {
        const existingItem = acc.find((item: { name: any; }) => item.name === curr.place);
        if (existingItem) {
            existingItem.value++;
        } else {
            acc.push({ value: 1, name: curr.place });
        }
    }
    return acc;
}, []);


const TimeFunction = ()=> {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const counts = Array(7).fill(0);

    tableData.value.forEach((item: { time: string | number | Date; }) => {
        const dayOfWeek = new Date(item.time).getDay();
        counts[dayOfWeek]++;
    });

    const daysArray = days.slice();
    const countsArray = counts.slice();
    TimeData.value = [daysArray, countsArray];
    waringtime.value = TimeData.value; // 使用 waringtime.value 来更新数据
}

</script>

<style scoped lang="scss"> .container {
     height: 100vh;
     width: 100vw;
     background-color: #f7f8fa;

     .bottom {
         display: flex;
     }
 }
</style>