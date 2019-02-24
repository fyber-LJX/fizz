import React from "react"
import NavList from "./../../components/nav"
import "./index.scss"
import { Switch, Route } from "react-router-dom"
import BlogList from "../entry"
import history from "src/shared/history"
import { TopicType } from "src/shared/models/home"
import { navListData } from "./modle"
import { of } from "rxjs"

interface PropsType {}
interface StateType {
    active: string
}

export default class Home extends React.Component<PropsType, StateType> {
    state = {
        active: "frontend"
    }

    componentDidMount() {
        this.checkActive()
    }

    checkActive = () => {
        const { location } = history
        const { pathname } = location
        const pathName$ = of(pathname)
        pathName$.subscribe((value: string) => {
            this.setState({
                active: value.replace("/timeline/", "")
            })
        })
    }

    handleClickNav = (nav: TopicType) => {
        const { name } = nav
        this.setState({
            active: name
        })
        history.push(`/timeline/${name}`)
    }

    render() {
        let { active } = this.state

        return (
            <div className="home">
                <NavList
                    active={active}
                    list={navListData}
                    clickNav={this.handleClickNav}
                />
                <div className="main-content">
                    <Switch>
                        {navListData.map((item: TopicType) => (
                            <Route name={item.name} component={BlogList} />
                        ))}
                    </Switch>
                </div>
            </div>
        )
    }
}
