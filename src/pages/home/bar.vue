<template>
    <div class="contain">
        <div ref="info" style="width: 100vw; height: 40vh"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, inject,onBeforeUnmount } from 'vue'
//通过inject使用echarts
const echarts: any = inject("echarts");
//通过ref获取html元素
const info = ref();
const data = ref([])

onMounted(() => {
    init()
})

onBeforeUnmount(()=>{
    if(echarts){
        echarts.dispose(echarts)
    }
})

const props = defineProps({
    waringtime: null
})

console.log(props.waringtime)
data.value =  props.waringtime

console.log(data.value)

const init = async () => {
    let infoEl = info.value;

    //  light dark
    let userEc = echarts.init(infoEl, "light");
    let option = {
        xAxis: {
            type: 'category',
            data: data.value[0]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: data.value[1],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };
    userEc.setOption(option);
}

</script>

<style scoped lang="scss">
.contain{
    width: 100vw;
    height: 40vh;
    background-color: white;
    border-radius: 5%;
    margin-top:10px;
}



</style>