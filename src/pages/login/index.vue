<template>
    <div class="content">
        <div class="form-structor">
            <div class="signup">
                <h2 class="form-title" id="signup"><span>or</span>注册</h2>
                <div class="form-holder">
                    <input type="text" class="input" placeholder="用户名" v-model="userinfo.username" />
                    <!-- <input type="email" class="input" placeholder="电话" /> -->
                    <input type="password" class="input" placeholder="密码" v-model="userinfo.password" />
                    <input type="password" class="input" placeholder="邮箱" v-model="userinfo.email" />
                </div>
                <button class="submit-btn" @click="registerclick">注册</button>
            </div>
            <div class="login slide-up">
                <div class="center">
                    <h2 class="form-title" id="login"><span>or</span>登录</h2>
                    <div class="form-holder">
                        <input type="email" class="input" placeholder="用户名" v-model="userinfo.username" />
                        <input type="password" class="input" placeholder="密码" v-model="userinfo.password" />
                    </div>
                    <button class="submit-btn" @click="loginclick">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup >
import { onMounted, reactive, ref } from 'vue'
import { showNotify } from 'vant';
import { useRouter } from 'vue-router'
import { register, login } from "@/api/login/index"


let router = useRouter()
let userinfo = reactive({
    username: '',
    password: '',
    email: '',
})

let loginBtn = ref(null);
let signupBtn = ref(null);
onMounted(() => {
    // loginBtn.value = document.getElementById('login');
    // signupBtn.value = document.getElementById('signup');
    init()
})

const init = async () => {

    const loginBtn = document.getElementById('login');
    const signupBtn = document.getElementById('signup');

    loginBtn.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
            if (element !== "slide-up") {
                parent.classList.add('slide-up')
            } else {
                signupBtn.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    });

    signupBtn.addEventListener('click', (e) => {
        let parent = e.target.parentNode;
        Array.from(e.target.parentNode.classList).find((element) => {
            if (element !== "slide-up") {
                parent.classList.add('slide-up')
            } else {
                loginBtn.parentNode.parentNode.classList.add('slide-up')
                parent.classList.remove('slide-up')
            }
        });
    });
}


const loginclick = async () => {
    if (userinfo.password == '') {
        showNotify({ type: 'danger', message: '请输入密码' });
    } else if (userinfo.username == '') {
        showNotify({ type: 'danger', message: '请输入账号' });
    } else {
        // let res = await login(userinfo);
        if (userinfo.username == "admin") {
            showNotify({ type: 'success', message: '登录成功' });
            router.push('/home');
        } else {
            showNotify({ type: 'danger', message: '用户名或密码错误' });
        }
    }
}


const registerclick = async () => {
    if (userinfo.password == "") {
        showNotify({ type: 'danger', message: '密码不能为空' });
    } else if (userinfo.username == "") {
        showNotify({ type: 'danger', message: '用户名不能为空' });
    } else if (userinfo.email == "") {
        showNotify({ type: 'danger', message: '邮箱不能为空' });
    } else {
        let res = await register(userinfo); // 使用 await 关键字
        if (res.code == 0) {
            showNotify({ type: 'success', message: '注册成功' });
        } else {
            showNotify({ type: 'danger', message: '用户名已占用' });
        }
    }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fira+Sans");

.content {
    position: relative;
    min-height: 100vh;
    background-color: #E1E8EE;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Fira Sans", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.form-structor {
    background-color: #222;
    border-radius: 15px;
    height: 100vh;
    width: 100vh;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        opacity: .8;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: 70vh;
        background-image: url(../assets/login.png);
    }

    .signup {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        width: 84%;
        z-index: 5;
        -webkit-transition: all .3s ease;


        &.slide-up {
            top: 5%;
            -webkit-transform: translate(-50%, 0%);
            -webkit-transition: all .3s ease;
        }

        &.slide-up .form-holder,
        &.slide-up .submit-btn {
            opacity: 0;
            visibility: hidden;
        }

        &.slide-up .form-title {
            font-size: 1em;
            cursor: pointer;
        }

        &.slide-up .form-title span {
            margin-right: 5px;
            opacity: 1;
            visibility: visible;
            -webkit-transition: all .3s ease;
        }

        .form-title {
            color: #fff;
            font-size: 1.7em;
            text-align: center;

            span {
                color: rgba(0, 0, 0, 0.4);
                opacity: 0;
                visibility: hidden;
                -webkit-transition: all .3s ease;
            }
        }

        .form-holder {
            border-radius: 15px;
            background-color: #fff;
            overflow: hidden;
            margin-top: 50px;
            opacity: 1;
            visibility: visible;
            -webkit-transition: all .3s ease;

            .input {
                border: 0;
                outline: none;
                box-shadow: none;
                display: block;
                height: 43px;
                line-height: 30px;
                padding: 8px 15px;
                border-bottom: 1px solid #eee;
                width: 100%;
                font-size: 12px;

                &:last-child {
                    border-bottom: 0;
                }

                &::-webkit-input-placeholder {
                    color: rgba(0, 0, 0, 0.4);
                }
            }
        }

        .submit-btn {
            background-color: rgba(0, 0, 0, 0.4);
            color: rgba(256, 256, 256, 0.7);
            border: 0;
            border-radius: 15px;
            display: block;
            margin: 15px auto;
            padding: 15px 45px;
            width: 100%;
            font-size: 13px;
            font-weight: bold;
            cursor: pointer;
            opacity: 1;
            visibility: visible;
            -webkit-transition: all .3s ease;

            &:hover {
                transition: all .3s ease;
                background-color: rgba(0, 0, 0, 0.8);
            }
        }
    }

    .login {
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 5;
        -webkit-transition: all .3s ease;

        &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: -20px;
            -webkit-transform: translate(-50%, 0);
            background-color: #fff;
            width: 200%;
            height: 250px;
            border-radius: 50%;
            z-index: 4;
            -webkit-transition: all .3s ease;
        }

        .center {
            position: absolute;
            top: calc(50% - 10%);
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            width: 84%;
            z-index: 5;
            -webkit-transition: all .3s ease;

            .form-title {
                color: #000;
                font-size: 1.7em;
                text-align: center;

                span {
                    color: rgba(0, 0, 0, 0.4);
                    opacity: 0;
                    visibility: hidden;
                    -webkit-transition: all .3s ease;
                }
            }

            .form-holder {
                border-radius: 15px;
                background-color: #fff;
                border: 1px solid #eee;
                overflow: hidden;
                margin-top: 50px;
                opacity: 1;
                visibility: visible;
                -webkit-transition: all .3s ease;

                .input {
                    border: 0;
                    outline: none;
                    box-shadow: none;
                    display: block;
                    height: 43px;
                    line-height: 30px;
                    padding: 8px 15px;
                    border-bottom: 1px solid #eee;
                    width: 100%;
                    font-size: 12px;

                    &:last-child {
                        border-bottom: 0;
                    }

                    &::-webkit-input-placeholder {
                        color: rgba(0, 0, 0, 0.4);
                    }
                }
            }

            .submit-btn {
                background-color: #6B92A4;
                color: rgba(256, 256, 256, 0.7);
                border: 0;
                border-radius: 15px;
                display: block;
                margin: 15px auto;
                padding: 15px 45px;
                width: 100%;
                font-size: 13px;
                font-weight: bold;
                cursor: pointer;
                opacity: 1;
                visibility: visible;
                -webkit-transition: all .3s ease;

                &:hover {
                    transition: all .3s ease;
                    background-color: rgba(0, 0, 0, 0.8);
                }
            }
        }

        &.slide-up {
            top: 90%;
            -webkit-transition: all .3s ease;
        }

        &.slide-up .center {
            top: 10%;
            -webkit-transform: translate(-50%, 0%);
            -webkit-transition: all .3s ease;
        }

        &.slide-up .form-holder,
        &.slide-up .submit-btn {
            opacity: 0;
            visibility: hidden;
            -webkit-transition: all .3s ease;
        }

        &.slide-up .form-title {
            font-size: 1em;
            margin: 0;
            padding: 0;
            cursor: pointer;
            -webkit-transition: all .3s ease;
        }

        &.slide-up .form-title span {
            margin-right: 5px;
            opacity: 1;
            visibility: visible;
            -webkit-transition: all .3s ease;
        }
    }
}
</style>