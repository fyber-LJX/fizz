import { createContext } from "react"
import { INIT_SIGN_STORE, SignStoreType, SignAction } from "./reducer"

interface SignCTXType {
  store: SignStoreType
  dispatch: React.Dispatch<SignAction>
}
const SignCTX = createContext({
  store: INIT_SIGN_STORE
} as SignCTXType)

export default SignCTX
