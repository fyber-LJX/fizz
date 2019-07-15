type RegisterType = {
  email?: string
  nickname: string
  password: string
}

type StatusType = {
  step: 0 | 1 // 0 登录 | 1 注册
  hiddenPWD: boolean // true 隐藏 | false 展示
}

type SignInType = {
  username: string
  password: string
}

export interface SignStoreType {
  register: RegisterType
  status: StatusType
  signin: SignInType
}

export const SIGN_IN_ACTION = Symbol("sign_in")
export const REGISTER_ACTION = Symbol("register")
export const CLEAN_SIGN_ACTION = Symbol("clean")
export const SIGN_STATUS_ACTION = Symbol("sign_status")

export type SignAction = {
  type:
    | typeof SIGN_IN_ACTION
    | typeof CLEAN_SIGN_ACTION
    | typeof REGISTER_ACTION
    | typeof SIGN_STATUS_ACTION
  payload: Partial<RegisterType | StatusType | SignInType>
}

export const INIT_SIGN_STORE: SignStoreType = {
  register: {
    email: "",
    nickname: "",
    password: ""
  },
  status: {
    step: 0,
    hiddenPWD: true
  },
  signin: {
    username: "",
    password: ""
  }
}

const reducer = (store: SignStoreType, action: SignAction): SignStoreType => {
  const { type, payload } = action
  const { register, status, signin } = store

  switch (type) {
    case SIGN_IN_ACTION:
      return { register, status, signin: { ...signin, ...payload } }
    case REGISTER_ACTION:
      return { register: { ...register, ...payload }, status, signin }
    case SIGN_STATUS_ACTION:
      return { register, status: { ...status, ...payload }, signin }
    case CLEAN_SIGN_ACTION:
      return { ...INIT_SIGN_STORE }
    default:
      return { ...store }
  }
}

export default reducer
