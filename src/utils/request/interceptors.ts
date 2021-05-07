import Taro from '@tarojs/taro'
import { isSuccess, customMessages } from './config'

type ErrorType = 'Server' | 'Client' | 'Network'

class ApiError extends Error {
  code: number

  type: ErrorType

  /**
   *
   */
  constructor(code: number, type: ErrorType, message: string) {
    super(message)
    this.code = code
    this.type = type
  }
}

const customInterceptor: Taro.interceptor = (chain) =>
  chain.proceed(chain.requestParams).then((res) => {
    // 只要请求成功，不管返回什么状态码，都走这个回调
    if (typeof res.data === 'object') {
      if (isSuccess(res.statusCode)) {
        if (res.data.code === 0) {
          if (!res.data) res.data = null
          return Promise.resolve(res.data)
        }
        return Promise.reject(
          new ApiError(
            res.data.code,
            'Server',
            res.data.message ||
              res.data.msg ||
              res.data.resultMessage ||
              res.data.debugMessage ||
              customMessages[res.data.code] ||
              customMessages[res.statusCode] ||
              customMessages.default,
          ),
        )
      }
      return Promise.reject(
        new ApiError(
          res.data.code,
          'Network',
          res.data.msg ||
            res.data.resultMessage ||
            res.data.debugMessage ||
            customMessages[res.statusCode] ||
            customMessages.default,
        ),
      )
    }
    return Promise.reject(
      new ApiError(
        res.statusCode,
        'Client',
        customMessages[res.statusCode] || customMessages.default,
      ),
    )
  })

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [
  customInterceptor,
  Taro.interceptors.logInterceptor,
  Taro.interceptors.timeoutInterceptor,
]

export default interceptors
