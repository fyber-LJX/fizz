import { NavLink } from "react-router-dom"
import React from "react"
import styles from "./index.scss"

interface PropsType {
  list: Array<Item>
}
type Item = {
  id: number
  name: string
  path: string
}

const TopNav = (props: PropsType) => {
  const { list } = props

  return (
    <nav className={styles.topnav}>
      {list.map(item => (
        <NavLink
          activeClassName={styles.active}
          className={styles.navlink}
          to={`/timeline/${item.path}`}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  )
}

export default TopNav
