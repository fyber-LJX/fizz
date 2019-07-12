import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./index.scss"

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo} />
        <nav>
          <NavLink activeClassName={styles.active} to="/timeline">
            首页
          </NavLink>
          <NavLink to="/write">写文章</NavLink>
        </nav>
        <div className="user" />
      </div>
    </header>
  )
}

export default Header
