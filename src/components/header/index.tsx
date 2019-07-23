import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./index.scss"
import LoginGurad from "../login_guard"

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo} />
        <nav className={styles.headerNav}>
          <NavLink activeClassName={styles.active} to="/timeline">
            首页
          </NavLink>
          <NavLink activeClassName={styles.active} to="/qa">
            集思广益
          </NavLink>
          <NavLink activeClassName={styles.active} to="/write">
            写文章
          </NavLink>
        </nav>
        <div className={styles.search}>
          <input type="text" maxLength={20} placeholder="找寻你的最爱～" />
          <i className="iconfont">&#xe870;</i>
        </div>
        <div className={styles.user}>
          <i className="iconfont">&#xe871;</i>
          <div>
            <LoginGurad>
              <i className="iconfont">&#xe8a0;</i>
            </LoginGurad>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
