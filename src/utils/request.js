import axios from "axios";

// 创建axios实例
const http = axios.create({
  //请求响应地址
  // baseURL: 'http://localhost:8080/api',
  baseURL: '/api',
  //超时时间
  timeout: 5000
})

//添加请求拦截器
http.interceptors.request.use(function (config) {
  //在发送请求前作什么
  return config;
}, function (error) {
  //对请求错误做什么
  return Promise.reject(error);
});

//添加响应拦截器
http.interceptors.response.use(function (response) {
  //对响应数据作什么
  return response;
}, function (error) {
  //对响应错误做什么
  return Promise.reject(error);
});

export default http