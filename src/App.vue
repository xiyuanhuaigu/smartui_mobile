<template>
  <div>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import tabbar from "@/components/Tabbar/index.vue"
//引入echarts
import * as echarts from "echarts";

//通过provide提供echarts
provide("echarts", echarts);

</script>

<style scoped>

</style>