import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./index.scss"

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo} />
        <nav className={styles.headerNav}>
          <NavLink activeClassName={styles.active} to="/timeline">
            首页
          </NavLink>
          <NavLink activeClassName={styles.active} to="/write">
            写文章
          </NavLink>
        </nav>
        <div className={styles.search}>
          <input type="text" maxLength={20} placeholder="找寻你的最爱～" />
          <i className="iconfont">&#xe870;</i>
        </div>
        <div className={styles.user} />
      </div>
    </header>
  )
}

export default Header
