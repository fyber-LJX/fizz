import * as React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.scss"
import Header from "./components/header"
import Home from "./pages/home/index.connect"
import Category from "./pages/category/index.connect"

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="fizz sona-flex-column">
          <Header />
          <Switch>
            {/* <Route exact={true} path='/' component={Home} /> */}
            <Route path="/timeline" component={Home} />
            <Route path="/category" component={Category} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
