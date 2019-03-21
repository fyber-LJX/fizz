import React, { useState } from "react"
import Edit, { Article } from "./components/edit/index"
import Preview from "./components/preview"

interface PropsType {}

const Writer = (props: PropsType) => {
  const [status, setStatus] = useState(1)
  const [article, setArticle] = useState({} as Article)
  console.log(article)

  return (
    <div className="main-z-content">
      {status === 1 ? (
        <Edit save={setArticle} setStatus={setStatus} />
      ) : (
        <Preview article={article} />
      )}
    </div>
  )
}

export default Writer
