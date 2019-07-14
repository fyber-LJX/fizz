/**
 * 2019.07.14 fyber 晴
 * 存放关于文章的数据
 * reducer/actions
 */

type ArticleType = {
  title: string
  columns: number
  tags: number[]
  description: string
  content: string
}

export interface ArticleStoreType {
  article: ArticleType
}

export const INIT_ARTICLE_STORE: ArticleStoreType = {
  article: {
    title: "",
    columns: 0,
    tags: [0],
    description: "",
    content: ""
  }
}

export type ArticleAction = {
  type: typeof ARTICLE_ACTIONS | typeof CLEAN_ARTICLE_ACTIONS
  payload?: Partial<ArticleType>
}

export const ARTICLE_ACTIONS = Symbol("article_action")
export const CLEAN_ARTICLE_ACTIONS = Symbol("clean")

const reducer = (
  store: ArticleStoreType,
  action: ArticleAction
): ArticleStoreType => {
  const { type, payload } = action
  const { article } = store
  switch (type) {
    // 更新文章信息
    case ARTICLE_ACTIONS:
      return { ...store, article: { ...article, ...payload } }
    // 清楚所有信息
    case CLEAN_ARTICLE_ACTIONS:
      return { ...INIT_ARTICLE_STORE }
    default:
      return { ...store }
  }
}

export default reducer
