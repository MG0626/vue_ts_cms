/*
 * @Author: CenMingGuang
 * @Date: 2022-02-16 14:25:49
 * @LastEditTime: 2022-02-16 14:39:27
 * @LastEditors: CenMingGuang
 * @Description: 配置
 * @FilePath: /vue_ts_cms/src/services/request/config.ts
 */

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:5000'
} else {
  BASE_URL = 'production'
}

export { BASE_URL, TIME_OUT }
