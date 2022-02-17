import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { RequestConfig, Interceptors } from './types'

class Request {
  instance: AxiosInstance
  interceptors?: Interceptors

  constructor(option: RequestConfig) {
    // 创建实例
    this.instance = axios.create(option)
    // 保存自定义拦截器
    this.interceptors = option.interceptors

    // 自定义请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 自定义响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局请求拦截器，用于携带token或加载loading
    this.instance.interceptors.request.use(
      (config) => config,
      (err) => err
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res) => res,
      (err) => err
    )
  }

  // 请求方法
  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  // get请求
  get<T = any>(config: RequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'GET'
    })
  }

  // post请求
  post<T = any>(config: RequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'POST'
    })
  }

  // put请求
  put<T = any>(config: RequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'PUT'
    })
  }

  // patch请求
  patch<T = any>(config: RequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'PATCH'
    })
  }

  // delete请求
  delete<T = any>(config: RequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'DELETE'
    })
  }
}

export default Request
