import React, { useReducer } from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter } from "react-router-dom"
import { Router } from "react-router"
import { createBrowserHistory } from "history"
import "./styles/index.scss"
import FizzCTX from "./share/context"
import reducer, { INIT_STORE } from "./share/reducer"

const history = createBrowserHistory()
const { Provider } = FizzCTX

const Index = () => {
  const [store, dispatch] = useReducer(reducer, INIT_STORE)
  return (
    <BrowserRouter>
      <Router history={history}>
        <Provider value={{ fizz: store, dispatch }}>
          <App />
        </Provider>
      </Router>
    </BrowserRouter>
  )
}

ReactDOM.render(<Index />, document.getElementById("root") as HTMLElement)
registerServiceWorker()
