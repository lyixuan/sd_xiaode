import { stringify } from 'qs';
import request from '../utils/request';
import config from '../config';

const { NODE_ENV = 'pro' } = config;
const hostObj = {
  pro: 'http://bi-admin.ministudy.com',
  dev: 'http://172.16.117.65:8082',
};
const HOST = hostObj[NODE_ENV];

/*
*此接口为获取微信授权接口(微信企业号)
*/
export function getWeChart() {
  const weChartUrlObj = {
    dev: 'http://172.16.117.65:8087/authorize/RedirectToWechat?branch=dev',
    pro: 'http://bi-wechat.ministudy.com/authorize/RedirectToWechat?branch=pro',
  };
  return weChartUrlObj[NODE_ENV];
}
/*
*此接口获取时间空间是指可选日期
*
*/
export async function getDisableTime(params) {
  return request(`${HOST}/timeManagement/list?${stringify(params)}`, {
    method: 'GET',
  });
}

/*
*此接口用于获取用户登录信息
* @params{userId}
*/
export async function getUserInfo(params) {
  return request(`${HOST}/wechatLogin/getUserByCode`, {
    method: 'POST',
    body: params,
  });
}
/*
*此接口用于获取组织结构信息
*/
export async function getOrgMap() {
  return request(`${HOST}/organization/findOrgMap`, {
    method: 'GET',
  });
}