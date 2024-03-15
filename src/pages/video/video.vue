<template>
    <div class="videostyle">
        <video id="videoPlayer" controls autoplay muted></video>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
// import flvjs from 'flv.js';

onMounted(()=>{
//  init()
})

// const init = async () => {
//     const videoElement = document.getElementById('videoPlayer') as HTMLVideoElement;

//     if (flvjs.isSupported()) {
//         const flvPlayer = flvjs.createPlayer({
//             type: 'flv',
//             url: ''
//         });
//         flvPlayer.attachMediaElement(videoElement);
//         flvPlayer.load();
//         flvPlayer.play();
//     }

//     // 监听设备旋转事件
//     window.addEventListener('orientationchange', () => {
//         if (window.orientation === 90 || window.orientation === -90) {
//             // 横屏时的处理
//             videoElement.style.width = '100vh';
//             videoElement.style.height = '100vw';
//         } else {
//             // 竖屏时的处理
//             videoElement.style.width = '100vw';
//             videoElement.style.height = 'auto';
//         }
//     });

// }



</script>

<style scoped lang="scss">
.videostyle{
    width: 100vw;
    height: 50vh;
    video{
        width: 100vw;
    }
}


</style>