import React from "react"
import Header from "./components/header"
import { Switch, Route } from "react-router"
import { HomeComponent, WriteComponent } from "./pages"
import styles from "./styles/app.scss"

const App = () => {
  return (
    <div className={styles.mainContent}>
      <Header />
      <div className={styles.content}>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route strict path="/timeline" component={HomeComponent} />
          <Route path="/write" component={WriteComponent} />
        </Switch>
      </div>
    </div>
  )
}

export default App
