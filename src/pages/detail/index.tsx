import Remarkable from "remarkable"
import hljs from "highlight-ts"

const md = new Remarkable({
  html: true, // Enable HTML tags in source
  xhtmlOut: true, // Use '/' to close single tags (<br />)
  breaks: true, // Convert '\n' in paragraphs into <br>
  langPrefix: "language-", // CSS language prefix for fenced blocks
  linkify: false, // Autoconvert URL-like text to links
  typographer: false,
  quotes: "“”‘’",

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight: function(str, lang) {
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

const mockData = `
  ### 这是一个标题
  #### 这也是一个标题
  ···javascript
    const a = 1;
    console.log(1);
  ···
`
const Detail = () => {}

export default Detail
