import React from "react"
import Remarkable from "remarkable"
import { Article } from "../edit"
const hljs = require("highlightjs")

const md = new Remarkable()
md.set({
  html: true,
  breaks: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value
    } catch (err) {}

    return "" // use external default escaping
  }
})

interface PropsType {
  article: Article
}

const Preview = (props: PropsType) => {
  const { article } = props
  const { content } = article
  const mdArticle = md.render(content)
  console.log(md.render(content))

  return (
    <div
      className="writer-preview"
      dangerouslySetInnerHTML={{ __html: mdArticle }}
    />
  )
}

export default Preview
