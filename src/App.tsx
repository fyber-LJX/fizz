import React from "react"
import Header from "./components/header"
import { Switch, Route } from "react-router"
import { HomeComponent } from "./pages"
import styles from "./styles/app.scss"

const App = () => {
  return (
    <div className={styles.mainContent}>
      <Header />
      <div className={styles.content}>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route strict path="/timeline" component={HomeComponent} />
        </Switch>
      </div>
    </div>
  )
}

export default App
