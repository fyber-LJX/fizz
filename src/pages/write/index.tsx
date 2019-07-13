import React from "react"
import styles from "./index.scss"
import Edit from "./edit"
import Preview from "./preview"

const Write = () => {
  return (
    <div className={styles.write}>
      <Edit />
      <Preview />
    </div>
  )
}

export default Write
