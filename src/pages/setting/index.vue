<template>
    <div class="container">
        <div class="info">
            <el-descriptions class="margin-top" title="" :column="1" border>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            <el-icon>
                                <user />
                            </el-icon>
                            用户名
                        </div>
                    </template>
                    admin
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            <el-icon>
                                <user />
                            </el-icon>
                            邮箱
                        </div>
                    </template>
                    123456789@qq.com
                </el-descriptions-item>
            </el-descriptions>
        </div>
        <div class="setting">
            <van-cell title="修改密码" is-link @click="showchang"/>
            <van-cell title="注销账号" is-link @click="logout"/>
            <van-action-sheet v-model:show="show" title="标题">
                    <div class="changinfo" >
                        <van-field v-model="text" label="原密码" />
                        <van-field v-model="text" label="新密码" />
                        <van-button type="primary" size="large" style="margin-top: 10vh">修改密码</van-button>
                    </div>
            </van-action-sheet>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from "vue";
let show = ref(false);
let text = ref()
const router = useRouter()
const showchang = async () => {
    show.value = true
}

const logout = async() =>{
    router.push('/login')
}

</script>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
    background-color: #f7f8fa;

    .info {
        padding-top: 10px;
        border-radius: 5%;
        position: relative;
        top: 2vh;
        background-color: white;
        height: 12vh;
    }

    .setting {
        padding-top: 10px;
        border-radius: 5%;
        position: relative;
        top: 10vh;
        background-color: white;
        height: 13vh;
        .changinfo{
            height: 40vh;
        }
    }
}
</style>