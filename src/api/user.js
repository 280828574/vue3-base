import request from './request';

// 登录
export function login(data) {
  return request({
    url: `/mgt/login`,
    header: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    data,
  });
}

export function fetchUsers(id) {
  return request({
    url: `/users`,
    header: {
      'Content-Type': 'application/json',
    },
    method: 'get',
  });
}
