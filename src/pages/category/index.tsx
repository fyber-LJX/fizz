import React from "react"
import { Category as CategoryData } from "./../../shared/models/category"
interface PropsType {
    category: CategoryData
    getCateGoryList: Function
}

export default class Category extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getCateGoryList()
    }

    render() {
        const { category } = this.props
        console.log(category)
        return <div className="category">category</div>
    }
}
