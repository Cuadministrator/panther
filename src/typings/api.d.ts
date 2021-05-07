interface WarehouseResponse<T> {
  code: number
  data: T
  message: string
  totalCount?: number
}

interface Account {
  token: string
  mobile: string
  userKey: string
}
