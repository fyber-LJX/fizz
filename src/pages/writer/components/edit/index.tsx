import React from "react"

interface PropsType {}
interface StateType {}

export default class Writer extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props)
  }

  render() {
    return <div className="writer-edit">edit</div>
  }
}
