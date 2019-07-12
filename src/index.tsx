import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter } from "react-router-dom"
import { Router } from "react-router"
import { createBrowserHistory } from "history"

const history = createBrowserHistory()

const Index = () => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <App />
      </Router>
    </BrowserRouter>
  )
}

ReactDOM.render(<Index />, document.getElementById("root") as HTMLElement)
registerServiceWorker()
