import React from "react"

interface PropsType {
    onClickHome: Function
    count: number
}
interface StateType {}

export default class Home extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
    }

    render() {
        return (
            <div
                className="main-content"
                onClick={() => {
                    console.log(this.props.count)
                    this.props.onClickHome(10)
                }}
            >
                Home{this.props.count}
            </div>
        )
    }
}
