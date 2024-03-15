<template>
    <div class="contain">
        <div ref="info1" style="width: 100vw; height: 40vh"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, inject,onBeforeUnmount } from "vue";

//通过inject使用echarts
const echarts: any = inject("echarts");

//通过ref获取html元素
const info1 = ref();

onMounted(() => {
    init()
})
onBeforeUnmount(()=>{
    if(echarts){
        echarts.dispose(echarts)
    }
})

let data = ref([])

const init = async () => {
    let infoEl = info1.value;

    //  light dark
    let userEc = echarts.init(infoEl, "light");

    // 指定图表的配置项和数据
    let option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '1%',
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: data.value
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    userEc.setOption(option);
}
const props = defineProps({
    waringstyle:null
})
data.value = props.waringstyle
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