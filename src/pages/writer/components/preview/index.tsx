import React from "react"
import Remarkable from "remarkable"
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
  article: string
}
interface StateType {}

export default class Preview extends React.Component<PropsType, StateType> {
  render() {
    const { article } = this.props
    const mdArticle = md.render(article)
    console.log(md.render(article))

    return (
      <div
        className="writer-preview"
        dangerouslySetInnerHTML={{ __html: mdArticle }}
      />
    )
  }
}
