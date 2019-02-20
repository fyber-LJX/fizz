import React from "react"
import {
    Category as CategoryData,
    CategoryItem
} from "./../../shared/models/category"
import NavList, { NavItem } from "./../../components/nav"
import "./index.scss"
import { Switch, Route } from "react-router-dom"
import BlogList from "./../blog-list"
import history from "src/shared/history"

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

    handleClickNav = (nav: NavItem) => {
        const { id, name } = nav
        this.setState({
            active: id
        })
        console.log(name)
        history.push(`/timeline/${name}`)
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
                <div className="main-content">
                    <Switch>
                        {categoryList.map((item: CategoryItem) => (
                            <Route name={item.name} component={BlogList} />
                        ))}
                    </Switch>
                </div>
            </div>
        )
    }
}
