// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** /ldap/login */
export function ldapLogin(data: any, options?: { [key: string]: any }) {
  return request('/ldap/login', {
    method: 'post',
    data,
    ...(options || {}),
  });
}

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('http://oregon-dev-yapi.opsretech.com:3000/mock/214/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}
