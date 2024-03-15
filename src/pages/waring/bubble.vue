<template>
    <div>
        <van-floating-bubble axis="xy" icon="chat" magnetic="x" @offset-change="onOffsetChange" v-model:offset="offset" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { showToast } from 'vant';

const offset = ref({ x: 342, y: 752 });
const onOffsetChange = (offset:any) => {
    showToast(`x: ${offset.x.toFixed(342)}, y: ${offset.y.toFixed(752)}`);
};
</script>

<style scoped lang="scss">

</style>