import React, { useCallback, useContext } from "react"
import { UserType, CHANGE_STATUS } from "src/share/reducer"
import FizzCTX from "src/share/context"

interface PropsType {
  children: any
  onClick?: (userinfo?: UserType) => void
}
const LoginGurad = (props: PropsType) => {
  const { children, onClick } = props
  const { fizz, dispatch } = useContext(FizzCTX)
  const { userinfo, status } = fizz

  const handleClick = useCallback(() => {
    const { isLogin } = userinfo
    if (isLogin) onClick && onClick(userinfo)
    else dispatch({ type: CHANGE_STATUS, payload: { showLogin: true } })
  }, [userinfo, status])

  return (
    <div onClick={handleClick} style={{ display: "inline-block" }}>
      {children}
    </div>
  )
}

export default LoginGurad
