import React from "react"
import { Category as CategoryData } from "./../../shared/models/category"
import NavList from "./../../components/nav"
import "./index.scss"

interface PropsType {
    category: CategoryData
    getCateGoryList: Function
}
interface StateType {
    active: number
}

export default class Home extends React.Component<PropsType, StateType> {
    state = {
        active: 0
    }

    componentDidMount() {
        this.props.getCateGoryList()
    }

    handleClickNav = (id: number) => {
        this.setState({
            active: id
        })
    }

    render() {
        const { category } = this.props
        const { categoryList } = category
        let { active } = this.state

        if (!active && categoryList.length > 0) {
            active = categoryList[0].id
        }

        return (
            <div className="home">
                <NavList
                    active={active}
                    list={categoryList}
                    clickNav={this.handleClickNav}
                />
                <div className="main-content" />
            </div>
        )
    }
}
