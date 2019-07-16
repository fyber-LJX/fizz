export interface StoreType {
  userinfo: UserType
  status: StatusType
}
export type StatusType = typeof STATUS
export type UserType = typeof USERINFO
// 全局状态
const STATUS = {
  showLogin: false
}
// 用户信息
const USERINFO = {
  username: "",
  isLogin: false,
  email: "",
  img: "",
  role: 0
}
export const INIT_STORE: StoreType = {
  userinfo: USERINFO,
  status: STATUS
}

export const LOG_IN = Symbol("log_in")
export const LOG_OUT = Symbol("log_out")
export const CHANGE_STATUS = Symbol("change_status")
type SymbolsType = typeof LOG_IN | typeof LOG_OUT | typeof CHANGE_STATUS
export type Action = {
  type: SymbolsType
  payload?: Partial<typeof USERINFO | typeof STATUS>
}
const reducer = (store: StoreType = INIT_STORE, action: Action): StoreType => {
  const { type, payload } = action
  const { userinfo, status } = store
  switch (type) {
    case LOG_IN:
      return { userinfo: { ...userinfo, ...payload }, status }
    case LOG_OUT:
      return { userinfo: USERINFO, status }
    case CHANGE_STATUS:
      return { userinfo, status: { ...status, ...payload } }
    default:
      return { userinfo: USERINFO, status }
  }
}

export default reducer
