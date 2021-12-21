"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var element_ui_1 = require("element-ui");
// import store from '@/store'
var instance = axios_1["default"].create({
    baseURL: process.env.BASE_URL,
    timeout: 5000
    // headers: { 'c-header': 'value' }
});
// 请求拦截
instance.interceptors.request.use(function (config) {
    config.headers['C-Token'] = 'sesxvxeh';
    return config;
}, function (error) {
    element_ui_1.Message({
        type: 'error',
        message: error.message || 'error',
        duration: 3 * 1000
    });
    return Promise.reject(error);
});
// 响应拦截
instance.interceptors.response.use(function (response) {
    console.log(response.data);
    if (response.data.code !== 200) {
        element_ui_1.Message({
            message: response.data.message || 'Error',
            type: 'error',
            duration: 3 * 1000
        });
    }
    else {
        return response;
    }
    return response;
}, function (error) {
    element_ui_1.Message({
        message: error.message || 'Error',
        type: 'error',
        duration: 3 * 1000
    });
    return Promise.reject(error);
});
exports["default"] = instance;
