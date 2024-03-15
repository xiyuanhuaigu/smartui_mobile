<template>
    <div class="container">
        <van-nav-bar title="警告" left-text="返回" left-arrow @click-left="onClickLeft" />
        <van-notify v-model:show="show" type="danger">
            <van-icon name="bell" style="margin-right: 4px;" />
            <span>通知内容</span>
        </van-notify>
        <div class="liststyle">
            <waringlist></waringlist>
        </div>
        <!-- <bubble></bubble> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import waringlist from './list.vue'
// import bubble from './bubble.vue'

const show = ref(false);

const onClickLeft = async () => history.back();

</script>

<style scoped lang="scss">
.container {
    height: 100vh;
    width: 100vw;
    background-color: #f7f8fa;

    .liststyle {
        margin-top:5px;
        padding-top:25px;
        width:100vw;
        height:50vh;
        border-radius: 5%;
        background-color:white;
    }
}
</style>