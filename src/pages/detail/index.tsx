import React from "react"
import Markdown from "src/components/markdown"
import styles from "./index.scss"

const mockData =
  "# 这是一个标题 \n" +
  "## 这也是一个标题 \n" +
  "### 这也是一个标题 \n" +
  "#### 这也是一个标题 \n" +
  "##### 这也是一个标题 \n" +
  "###### 这也是一个标题 \n" +
  "```javascript \n const a = 1; console.log(1);\n``` \n" +
  "> id sem consectetuer libero luctus adipiscing. \n" +
  "1.  Bird \n" +
  "2.  Fish \n" +
  "3.  Tiger \n" +
  "4.  Panda \n" +
  "[foo]: http://example.com/ \n " +
  "*single asterisks* \n " +
  "__double underscores__ \n" +
  "-  Bird \n" +
  "- Fish \n" +
  "- Tiger \n" +
  "- Panda \n <br /> \n" +
  "所以我们需要在 custom hooks 中发送请求、暴露出请求后的值、暴露 loading 状态、以及用户可能需要多次请求，这就需要暴露一个勾子。在发生请求错误时可能需要做某些操作，所以还需要暴露在错误时回调的勾子函数。"

const Detail = () => {
  return (
    <div className={styles.detail}>
      <article>
        <Markdown content={mockData} />
      </article>
      <aside>我是侧边栏</aside>
    </div>
  )
}

export default Detail
