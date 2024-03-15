import request from "@/utils/request";

import { Logindata } from './type'




enum API {
    // 注册API
    REGISTER = "/user/register",
    // 登录api
    LOGIN = '/user/login',
    // 获取报警事件API
    WARINGDATA = ''
}

// 注册
export const register = (data: Logindata) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'POST',
            url: API.REGISTER,
            data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            resolve(res);
        }).catch((error) => {
            reject(error);
        });
    });
};

//登录
export const login = (data:Logindata) =>{
    return new Promise((resolve, reject) => {
        request({
            method: 'POST',
            url: API.LOGIN,
            data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            resolve(res);
        }).catch((error) => {
            reject(error);
        });
    });
}



// 获得所有报警事件
export const getwaringdata = () =>{
    return new Promise((resolve, reject) => {
        request({
            method: 'GET',
            url: API.WARINGDATA,
        }).then((res) => {
            resolve(res);
        }).catch((error) => {
            reject(error);
        });
    });
}
