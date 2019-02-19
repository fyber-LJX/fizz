import React from "react"
import "./index.scss"
import Button from "@material-ui/core/Button"
import { fromEvent } from "rxjs"

interface NavItem {
    id: number
    title: string
}

interface PropsType {
    list: Array<NavItem>
    clickNav: {
        (id: number): void
    }
    active: number
}

interface StateProps {
    fixed: boolean
}

export default class Nav extends React.Component<PropsType> {
    state: StateProps = {
        fixed: false
    }

    navList: React.RefObject<HTMLInputElement> = React.createRef()

    componentDidMount() {
        this.bindScrollToFixed()
    }

    bindScrollToFixed = () => {
        const navListDOM = this.navList.current
        if (navListDOM) {
            const navScroll$ = fromEvent(window, "scroll")
            navScroll$.subscribe(this.listenerScroll)
        }
    }

    listenerScroll = () => {
        const { pageYOffset } = window
        let { fixed } = this.state
        if ((pageYOffset >= 60 && !fixed) || (pageYOffset < 60 && fixed)) {
            this.setState({
                fixed: !fixed
            })
        }
    }

    handleClickNav = (id: number) => {
        this.props.clickNav(id)
    }

    render() {
        const { list, active } = this.props
        const { fixed } = this.state

        return (
            <div className="virtial-nav-parent">
                <div
                    className={`nav-list box-flex-center ${
                        fixed ? "fixed" : ""
                    }`}
                    ref={this.navList}
                >
                    <nav className="box-flex main-width">
                        {list.length > 0 &&
                            list.map((item: NavItem) => (
                                <li
                                    key={item.id}
                                    className={
                                        item.id === active ? "active" : ""
                                    }
                                    onClick={() => this.handleClickNav(item.id)}
                                >
                                    <Button color="inherit">
                                        {item.title}
                                    </Button>
                                </li>
                            ))}
                    </nav>
                </div>
            </div>
        )
    }
}
