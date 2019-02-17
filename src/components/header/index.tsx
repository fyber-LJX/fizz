import React from "react"
import { NavLink } from "react-router-dom"
import { from } from "rxjs"
import { filter, map } from "rxjs/operators"
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import IconButton from "@material-ui/core/IconButton"
import Input from "@material-ui/core/Input"

import "./index.scss"

interface StateType {
    searching: boolean
}

const headerConfig = [
    { to: "/blog", role: 3, title: "文章" },
    { to: "/category", role: 3, title: "分类" },
    { to: "/column", role: 3, title: "专栏" },
    { to: "/edit", role: 1, title: "编辑" },
    { to: "/about", role: 3, title: "相关" }
]
const source$ = from(headerConfig)
let Nav: any = []
source$
    .pipe(
        filter(value => value.role === 3),
        map((value, index) => (
            <NavLink to={value.to} activeClassName="active" key={index}>
                <Button color="inherit">{value.title}</Button>
            </NavLink>
        ))
    )
    .subscribe(value => Nav.push(value), undefined, undefined)

class Header extends React.Component {
    state: StateType = {
        searching: false
    }

    handleSearch = (searching: boolean) => {
        this.setState({
            searching: searching
        })
    }

    render() {
        const { searching } = this.state
        return (
            <header className="box-flex-space-between">
                <h1 className="title">Fizz</h1>
                <div className="box-flex-center">
                    <div className="search">
                        <IconButton
                            className="search-btn"
                            aria-label="Delete"
                            onClick={() => this.handleSearch(true)}
                        >
                            <SearchIcon />
                        </IconButton>
                        <Input
                            disableUnderline={false}
                            className={`${
                                searching ? "search-input-active" : ""
                            } search-input`}
                            placeholder="搜索Fizz"
                            onBlur={() => this.handleSearch(false)}
                        />
                    </div>
                    <nav>
                        {Nav.map((item: any) => item)}
                        <NavLink to="/login">
                            <Button color="inherit" variant="outlined">
                                登录
                            </Button>
                        </NavLink>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header
