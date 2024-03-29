import Taro from '@tarojs/taro'

/**
 * @description 获取当前页url
 */
export const getCurrentPageUrl = () => {
  const pages = Taro.getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const url = currentPage.route
  return url
}

export const pageToLogin = () => {
  const path = getCurrentPageUrl()
  if (!path.includes('login')) {
    // todo create login page
    Taro.navigateTo({ url: '/pages/login/login' })
  }
}
