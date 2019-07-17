import Remarkable from "remarkable"
import React from "react"
import styles from "./index.scss"

const md = new Remarkable("full", {
  html: true, // Enable HTML tags in source
  xhtmlOut: true, // Use '/' to close single tags (<br />)
  breaks: true, // Convert '\n' in paragraphs into <br>
  langPrefix: "language-", // CSS language prefix for fenced blocks
  linkify: false, // Autoconvert URL-like text to links
  typographer: false,
  quotes: "“”‘’"
})

interface PropsType {
  content: string
}
const Markdown = (props: PropsType) => {
  const { content } = props
  const mdArticle = md.render(content)

  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: mdArticle }}
    />
  )
}

export default Markdown
