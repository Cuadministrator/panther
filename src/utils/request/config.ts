export const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
}

export function isSuccess(httpStatus: number) {
  return (
    httpStatus === HTTP_STATUS.SUCCESS ||
    httpStatus === HTTP_STATUS.CREATED ||
    httpStatus === HTTP_STATUS.ACCEPTED
  )
}

export const customMessages = {
  [HTTP_STATUS.SUCCESS]: '',
  [HTTP_STATUS.CREATED]: '',
  [HTTP_STATUS.ACCEPTED]: '',
  [HTTP_STATUS.CLIENT_ERROR]: '客户端请求错误',
  [HTTP_STATUS.AUTHENTICATE]: '需要鉴权',
  [HTTP_STATUS.FORBIDDEN]: '需要登录',
  [HTTP_STATUS.NOT_FOUND]: '请求资源不存在',
  [HTTP_STATUS.SERVER_ERROR]: '服务端错误',
  [HTTP_STATUS.BAD_GATEWAY]: '服务端出现了问题',
  [HTTP_STATUS.SERVICE_UNAVAILABLE]: '服务不可用',
  [HTTP_STATUS.GATEWAY_TIMEOUT]: '服务端超时',
  default: '请求失败',
}
