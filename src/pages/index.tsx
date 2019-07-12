// code Splliting
// https://reacttraining.com/react-router/web/guides/code-splitting

import loadable from "@loadable/component"
import Loading from "../ui_components/loading"
import React from "react"

const HomeComponent = loadable(() => import("./home"), {
  fallback: <Loading />
})

export { HomeComponent }
