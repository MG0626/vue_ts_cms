/*
 * @Author: CenMingGuang
 * @Date: 2022-02-16 14:25:00
 * @LastEditTime: 2022-02-17 14:08:36
 * @LastEditors: CenMingGuang
 * @Description:
 * @FilePath: /vue_ts_cms/src/services/index.ts
 */

import Request from './request'

import { BASE_URL, TIME_OUT } from './request/config'

export default new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
