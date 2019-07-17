import React, { useContext } from "react"
import styles from "./index.scss"
import ArticleCTX from "./share/context"
import Markdown from "src/components/markdown"

const Preview = () => {
  const { store } = useContext(ArticleCTX)
  const { article } = store
  const { content } = article

  return (
    <div className={styles.preview}>
      <Markdown content={content} />
    </div>
  )
}

export default Preview
