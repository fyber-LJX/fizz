import styles from "./index.scss"
import React, { useContext } from "react"
import SignCTX from "./share/context"
import { SIGN_STATUS_ACTION, REGISTER_ACTION } from "./share/reducer"
import SignFooter from "./footer"
import FizzCTX from "src/share/context"
import { CHANGE_STATUS } from "src/share/reducer"

const Register = () => {
  const { store, dispatch } = useContext(SignCTX)
  const { dispatch: fizzDispatch } = useContext(FizzCTX)
  const { register, status } = store
  const { nickname, email, password } = register
  const { hiddenPWD } = status

  return (
    <div className={styles.signBox}>
      <div className={styles.actionLeft}>
        <span
          onClick={() =>
            dispatch({ type: SIGN_STATUS_ACTION, payload: { step: 0 } })
          }
        >
          登录
        </span>
      </div>
      <i
        onClick={() =>
          fizzDispatch({ type: CHANGE_STATUS, payload: { showLogin: false } })
        }
        className={`iconfont ${styles.close}`}
      >
        &#xe86e;
      </i>
      <h4>注册</h4>
      <div className={styles.content}>
        <div className={styles.formRow}>
          <input
            value={nickname}
            placeholder="昵称"
            type="text"
            onChange={e => {
              dispatch({
                type: REGISTER_ACTION,
                payload: { nickname: e.target.value }
              })
            }}
          />
        </div>
        <div className={styles.formRow}>
          <input
            value={email}
            placeholder="邮箱(可选)"
            type="email"
            onChange={e => {
              dispatch({
                type: REGISTER_ACTION,
                payload: { email: e.target.value }
              })
            }}
          />
        </div>
        <div className={styles.formRow}>
          <input
            value={password}
            placeholder="密码(不少于6位)"
            minLength={6}
            type="text"
            onChange={e => {
              dispatch({
                type: REGISTER_ACTION,
                payload: { password: e.target.value }
              })
            }}
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

export default Register
