import React, { useContext } from "react"
import Header from "./components/header"
import { Switch, Route, Redirect } from "react-router"
import { HomeComponent, WriteComponent, SignComponent } from "./pages"
import styles from "./styles/app.scss"
import FizzCTX from "./share/context"

const App = () => {
  const { fizz } = useContext(FizzCTX)
  const { showLogin } = fizz.status
  return (
    <div className={styles.mainContent}>
      <Header />
      <div className={styles.content}>
        {/* 负责路由重定向 */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/timeline/recommended" />
          </Route>
          <Route strict path="/timeline" component={HomeComponent}>
            <Redirect to="/timeline/recommended" />
          </Route>
        </Switch>
        {/* 负责页面的渲染 */}
        <Switch>
          <Route strict path="/timeline" component={HomeComponent} />
          <Route path="/write" component={WriteComponent} />
        </Switch>
        {showLogin && <SignComponent />}
      </div>
    </div>
  )
}

export default App
