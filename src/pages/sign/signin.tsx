import styles from "./index.scss"
import React, { useContext } from "react"
import SignCTX from "./share/context"
import { SIGN_IN_ACTION, SIGN_STATUS_ACTION } from "./share/reducer"
import SignFooter from "./footer"

const SignIn = () => {
  const { store, dispatch } = useContext(SignCTX)
  const { signin, status } = store
  const { username, password } = signin
  const { hiddenPWD } = status

  return (
    <div className={styles.signBox}>
      <div className={styles.actionLeft}>
        <span
          onClick={() =>
            dispatch({ type: SIGN_STATUS_ACTION, payload: { step: 1 } })
          }
        >
          注册
        </span>
      </div>
      <i className={`iconfont ${styles.close}`}>&#xe86e;</i>
      <h4>登录</h4>
      <div className={styles.content}>
        <div className={styles.formRow}>
          <input
            onChange={e => {
              dispatch({
                type: SIGN_IN_ACTION,
                payload: { username: e.target.value }
              })
            }}
            value={username}
            placeholder="昵称或邮箱"
            type="text"
          />
        </div>
        <div className={styles.formRow}>
          <input
            onChange={e => {
              dispatch({
                type: SIGN_IN_ACTION,
                payload: { password: e.target.value }
              })
            }}
            value={password}
            placeholder="密码"
            type="text"
          />
          <div
            className={styles.pwdIcon}
            onClick={() => {
              dispatch({
                type: SIGN_STATUS_ACTION,
                payload: { hiddenPWD: !hiddenPWD }
              })
            }}
          >
            {hiddenPWD ? (
              <i className="iconfont">&#xe901;</i>
            ) : (
              <i className="iconfont">&#xe899;</i>
            )}
          </div>
        </div>
        <div className={styles.formRow}>
          <button>登录</button>
        </div>
        <SignFooter />
      </div>
    </div>
  )
}

export default SignIn
