import React from "react"

interface PropsType {}

interface StateType {}

export default class BlogList extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
    }

    render() {
        return <div className="main-content">bloglist</div>
    }
}
