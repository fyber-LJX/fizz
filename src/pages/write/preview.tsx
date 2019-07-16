import React, { useContext } from "react"
import styles from "./index.scss"
import ArticleCTX from "./share/context"

const Preview = () => {
  const { store } = useContext(ArticleCTX)
  const { article } = store
  const { content } = article

  return (
    <div className={styles.preview}>
      <textarea disabled value={content} />
    </div>
  )
}

export default Preview
