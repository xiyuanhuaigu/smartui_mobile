<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>平台试运行公告</van-swipe-item>
            <van-swipe-item>平台试运行公告</van-swipe-item>
            <van-swipe-item>平台试运行公告</van-swipe-item>
            <van-swipe-item>平台试运行公告</van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 200px;
    text-align: center;
    background-color: #39a9ed;
  }


</style>