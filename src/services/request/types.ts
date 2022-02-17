/*
 * @Author: CenMingGuang
 * @Date: 2022-02-16 14:25:27
 * @LastEditTime: 2022-02-16 14:47:00
 * @LastEditors: CenMingGuang
 * @Description:
 * @FilePath: /vue_ts_cms/src/services/request/types.ts
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface Interceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: Interceptors
}
