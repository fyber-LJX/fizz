import React from "react"

interface PropsType {
    getCateGoryList: GetCateGoryList
}
interface GetCateGoryList {
    (): void
}
interface StateType {}

export default class Blog extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
        console.log(props)
        props.getCateGoryList()
    }

    render() {
        console.log(this.props)
        return <div className="main-content">Blog</div>
    }
}
