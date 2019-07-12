import React from "react"
import styles from "./app.scss"
import Header from "./components/header"
import { Switch, Route } from "react-router"
import { HomeComponent } from "./pages"

class App extends React.Component {
  render() {
    return (
      <div className={styles.mainContent}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route strict path="/timeline" component={HomeComponent} />
        </Switch>
      </div>
    )
  }
}

export default App
