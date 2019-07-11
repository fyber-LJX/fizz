import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter } from "react-router-dom"
import "./styles/index.scss"

const Index = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

ReactDOM.render(<Index />, document.getElementById("root") as HTMLElement)
registerServiceWorker()
