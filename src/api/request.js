import axios from 'axios';

// 获取环境变量
const ENV = import.meta.env;

const service = axios.create({
  baseURL: ENV.VITE_BASE_API, // url = base url + request url
  timeout: 10000, //设置超时
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;',
  },
});
service.interceptors.request.use(
  config => {
    for (const i in config.header) {
      config.headers[i] = config.header[i];
    }
    let accessToken = window.sessionStorage.getItem('accessToken');
    config.headers['accessToken'] = accessToken;
    if (!config.data) {
      config.data = [];
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 200 || res.code !== 20000) {
      if (response.status === 200 && res.code !== 500) {
        let newCode = '';
        if (res.code) {
          newCode = res.code.toString();
        }
        if (newCode && newCode.length && newCode.length >= 5 && newCode !== '20000' && res.code) {
          ElMessage({
            message: res.msg || '网络错误请稍后重试!',
            type: 'error',
            duration: 2 * 1000,
          });
          return Promise.reject(new Error(res.msg || 'Error'));
        } else {
          return res;
        }
      } else {
        ElMessage({
          message: res.msg || '当前系统异常，请稍后再试!!',
          type: 'error',
          duration: 2 * 1000,
        });
        return Promise.reject(new Error(res.msg || 'Error'));
      }
    } else {
      return res;
    }
  },
  error => {
    let originalRequest = error.config;
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1 && !originalRequest._retry) {
      ElMessage({
        message: '连接超时,请检查网络后重试!',
        type: 'error',
        duration: 2 * 1000,
      });
      return Promise.reject(error);
    }
    if (error.message === 'Network Error') {
      ElMessage({
        message: '网络错误,请检查网络后重试!',
        type: 'error',
        duration: 2 * 1000,
      });
      return Promise.reject(error);
    }
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 2 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
