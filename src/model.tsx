import React from "react"

interface PropsType {}
interface StateType {}

export default class Model extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props)
  }

  render() {
    return <div className="main-content" />
  }
}
