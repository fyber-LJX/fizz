import React, { useContext } from "react"
import styles from "./index.scss"
import ArticleCTX from "./share/context"
import { ARTICLE_ACTIONS } from "./share/reducer"

const Edit = () => {
  const { store, dispatch } = useContext(ArticleCTX)
  const { article } = store
  const { content } = article

  return (
    <div className={styles.edit}>
      {/* 考虑将textarea和input抽象成 Input，减少重复的代码 */}
      <textarea
        value={content}
        onChange={e =>
          dispatch({
            type: ARTICLE_ACTIONS,
            payload: { content: e.target.value }
          })
        }
      />
    </div>
  )
}

export default Edit
