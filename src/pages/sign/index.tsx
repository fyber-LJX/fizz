import styles from "./index.scss"
import React, { useReducer } from "react"
import reducer, { INIT_SIGN_STORE } from "./share/reducer"
import SignIn from "./signin"
import Register from "./register"
import SignCTX from "./share/context"
const { Provider } = SignCTX

const Sign = () => {
  const [store, dispatch] = useReducer(reducer, INIT_SIGN_STORE)

  const { status } = store
  const { step } = status

  return (
    <div className={styles.mask}>
      <Provider value={{ store, dispatch }}>
        <div className={styles.sign}>{step ? <Register /> : <SignIn />}</div>
      </Provider>
    </div>
  )
}

export default Sign
