import { NavLink } from "react-router-dom"
import React from "react"
import styles from "./index.scss"

interface PropsType {
  list: Array<Item>
}
type Item = {
  id: number
  name: string
}

const TopNav = (props: PropsType) => {
  const { list } = props
  console.log(props)

  const checkActive = (id: number) => {
    return true
  }

  return (
    <nav className={styles.topnav}>
      {list.map(item => (
        <NavLink
          activeClassName={styles.active}
          isActive={() => checkActive(item.id)}
          className={styles.navlink}
          to={`/timeline/${item.id}`}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  )
}

export default TopNav
