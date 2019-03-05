import React from "react"
import { NavLink } from "react-router-dom"
import { from, fromEvent } from "rxjs"
import { filter, map } from "rxjs/operators"
import Button from "@material-ui/core/Button"
import SearchIcon from "@material-ui/icons/Search"
import IconButton from "@material-ui/core/IconButton"
import Input from "@material-ui/core/Input"

import "./index.scss"

interface StateType {
  searching: boolean
  keyWord: string
}

const headerConfig = [
  { to: "/timeline", role: 3, title: "首页" },
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
        <Button size="large" color="inherit">
          {value.title}
        </Button>
      </NavLink>
    ))
  )
  .subscribe(value => Nav.push(value), undefined, undefined)

class Header extends React.Component {
  state: StateType = {
    searching: false,
    keyWord: ""
  }

  componentDidMount() {
    const keyup$ = fromEvent(document, "keyup")

    keyup$
      .pipe(filter((event: any) => event.code.toLocaleLowerCase() === "enter"))
      .subscribe(() => this.submitSearch())
  }

  submitSearch = () => {
    const { keyWord } = this.state

    if (keyWord === "") return
  }

  handleSearch = (searching: boolean) => {
    this.setState({
      searching: searching
    })
    if (searching) {
      const input: any = document.querySelector(".search-input>input")
      console.log(input)
      input && input.focus()
    } else {
      this.setState({
        keyWord: ""
      })
    }
  }

  handleChangeKeyWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    this.setState({
      keyWord: value
    })
  }

  render() {
    const { searching, keyWord } = this.state
    return (
      <header className="sona-flex-justify-SB sona-flex-align-C">
        <h1 className="title">Fizz</h1>
        <div className="sona-flex-center">
          <div className="search">
            <IconButton
              className="sona-mr-10"
              aria-label="Delete"
              onClick={() => this.handleSearch(true)}
            >
              <SearchIcon />
            </IconButton>
            <Input
              disableUnderline={true}
              className={`${
                searching ? "search-input-active" : ""
              } search-input`}
              placeholder="搜索Fizz"
              value={keyWord}
              onChange={this.handleChangeKeyWord}
              onBlur={() => this.handleSearch(false)}
            />
          </div>
          <nav>
            {Nav.map((item: any) => item)}
            <NavLink className="sona-ml-20" to="/login">
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
