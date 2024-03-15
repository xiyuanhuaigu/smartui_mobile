
import { Collapse } from 'vant';
<template>
    <van-nav-bar title="视频" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="container">
        <inputr></inputr>
        <Collapse></Collapse>
        <waringvideo></waringvideo>
    </div>
</template>

<script setup lang="ts">
import Collapse from "./Collapse.vue"
import inputr from './input.vue'
import waringvideo from './video.vue'

const onClickLeft = async() => history.back();
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    width: 100vw;
    background-color: #f7f8fa;

}
</style>