import React, { useReducer } from "react"
import styles from "./index.scss"
import Edit from "./edit"
import Preview from "./preview"
import reducer, { INIT_ARTICLE_STORE } from "./share/reducer"
import ArticleCTX from "./share/context"
const { Provider } = ArticleCTX

const Write = () => {
  const [store, dispatch] = useReducer(reducer, INIT_ARTICLE_STORE)
  return (
    <div className={styles.write}>
      {/* 考虑将头部抽象出去，因为头部的扩展可能会很多 */}
      <Provider value={{ store, dispatch }}>
        <header>
          <input placeholder="请输入文章标题" maxLength={40} />
        </header>
        <Edit />
        <Preview />
      </Provider>
    </div>
  )
}

export default Write
