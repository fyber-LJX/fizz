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
        props.getCateGoryList()
    }

    render() {
        return <div className="main-content">Blog</div>
    }
}
