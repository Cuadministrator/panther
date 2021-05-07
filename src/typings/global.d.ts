declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

type PLATFORM =
  | 'weapp'
  | 'swan'
  | 'alipay'
  | 'h5'
  | 'rn'
  | 'tt'
  | 'quickapp'
  | 'qq'
  | 'jd'

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: PLATFORM
    DUBAI_API: string
    DUBAI_APP_ID: Partial<Record<PLATFORM, string>>
    DUBAI_APP_SALT: Partial<Record<PLATFORM, string>>
    MP_APP_ID: Partial<Record<PLATFORM, string>>
    UTM_AHS: Partial<Record<PLATFORM, string>>
    SENSORS_API: string
    BUILD_ENV: 'dev' | 'uat' | 'prod'
    /**
     * https://m.aihuishoutest.com/n/#
     */
    NEOM: string
    [key: string]: any
  }
}

interface GeoPosition {
  latitude: number
  longitude: number
}

interface City {
  id: number
  name: string
}
