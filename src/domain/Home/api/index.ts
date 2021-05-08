import Http from '../../../utils/bakery'

// example
// 获取用户信息
export const getUserInfo = () => Http.get<Account>('/user')