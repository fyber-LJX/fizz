import { createContext } from "react"
import { StoreType, Action, INIT_STORE } from "./reducer"

type FizzCTXType = {
  fizz: StoreType
  dispatch: React.Dispatch<Action>
}

const FizzCTX = createContext({
  fizz: INIT_STORE
} as FizzCTXType)

export default FizzCTX
