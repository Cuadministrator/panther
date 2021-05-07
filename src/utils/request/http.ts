import Taro from '@tarojs/taro'
import getBaseUrl from './baseUrl'
import interceptors from './interceptors'

interceptors.forEach((interceptorItem) => Taro.addInterceptor(interceptorItem))

class HttpClient {
  preRequest: (option: Taro.request.Option) => void

  /**
   *
   */
  constructor(preRequest: (option: Taro.request.Option) => void) {
    this.preRequest = preRequest
  }

  baseOptions<T, TData extends object = {}>(
    params: Taro.request.Option<TData> & { contentType?: string },
    method: keyof Taro.request.method = 'GET',
  ) {
    const { url, data } = params
    const BASE_URL = getBaseUrl(url)
    let contentType = 'application/json;charset=UTF-8'
    contentType = params.contentType || contentType
    const option = {
      ...params,
      url: BASE_URL + url,
      data,
      method,
      header: {
        ...params.header,
        'Content-Type': contentType,
      },
    }
    this.preRequest(option)
    return (Taro.request<WarehouseResponse<T>, TData>(
      option,
    ) as unknown) as Promise<WarehouseResponse<T>>
  }

  get<T>(url: string, params?: object) {
    const option = {
      url,
      data: params,
    }
    return this.baseOptions<T, object>(option)
  }

  post<T extends object>(url, data?: object) {
    const params = {
      url,
      data,
    }
    return this.baseOptions<T, object>(params, 'POST')
  }

  put<T extends object>(url, data?: object) {
    const option = {
      url,
      data,
    }
    return this.baseOptions<T, object>(option, 'PUT')
  }

  delete<T extends object>(url) {
    const option = { url }
    return this.baseOptions<T>(option, 'DELETE')
  }
}

export default HttpClient
