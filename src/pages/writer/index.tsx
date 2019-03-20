import React from "react"
import Edit from "./components/edit/index"
import Preview from "./components/preview"

interface PropsType {}
interface StateType {
  status: number
  article: string
}

export default class Writer extends React.Component<PropsType, StateType> {
  state: StateType = {
    status: 1,
    article: `| First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |`
  }

  render() {
    const { status, article } = this.state
    return (
      <div className="main-z-content">
        {status === 1 ? <Edit /> : <Preview article={article} />}
      </div>
    )
  }
}
