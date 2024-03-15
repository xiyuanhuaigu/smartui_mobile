<template>
    <div class="contain">
        <van-circle v-model:current-rate="currentRate" :rate="rate" :color="gradientColor" text="紧急" size="30vw" layer-color="#f7f8fa" />
    </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue';
const currentRate = ref(0);
const gradientColor = {
      '0%': 'rgb(255, 240, 240)',
      '100%': 'rgb(247, 4, 4)',
    };
let rate= ref(100)



</script>

<style scoped lang="scss">
.contain {
     margin: 10px 0 0 10px;
     padding-top: 2vh;
     height: 39vw;
     width: 46vw;
     background-color: white;
     display: flex;
     justify-content: center;
     border-radius: 5%;
     
}




</style>