import { createContext } from "react"
import { INIT_ARTICLE_STORE, ArticleStoreType, ArticleAction } from "./reducer"

type ArticleCTXType = {
  store: ArticleStoreType
  dispatch: React.Dispatch<ArticleAction>
}

const ArticleCTX = createContext({
  store: INIT_ARTICLE_STORE
} as ArticleCTXType)

export default ArticleCTX
