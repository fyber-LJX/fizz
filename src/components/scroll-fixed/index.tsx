import React from "react"
import { fromEvent } from "rxjs"
import "./index.scss"

interface PropsType {
  [prop: string]: any
}

type ScrollParams = {
  App: any
  top?: number
  zIndex?: number
  threshold?: number
}

const WithScrollFixed = (options: ScrollParams) => {
  let { App, top = 0, zIndex = 9, threshold = 0 } = options
  return class ScrollFixed extends React.Component<PropsType> {
    scrollRef: React.RefObject<HTMLInputElement> = React.createRef()
    navScroll$: any

    state = {
      fixed: false
    }

    componentDidMount() {
      this.bindScrollToFixed()
    }

    componentWillUnmount() {
      this.navScroll$ && this.navScroll$.unsubscribe()
    }

    bindScrollToFixed = () => {
      const scrollRefDOM = this.scrollRef.current
      if (scrollRefDOM) {
        this.navScroll$ = fromEvent(window, "scroll")
        this.navScroll$.subscribe(this.listenerScroll)
      }
    }

    listenerScroll = () => {
      const { pageYOffset } = window
      let { fixed } = this.state
      if (
        (pageYOffset >= threshold && !fixed) ||
        (pageYOffset < threshold && fixed)
      ) {
        this.setState({
          fixed: !fixed
        })
      }
    }

    render() {
      const { fixed } = this.state
      return (
        <div className="virtial-nav-parent">
          <div
            className={`scroll-container ${fixed ? "fixed" : ""}`}
            style={{ zIndex, top: fixed ? top : 0 }}
          >
            <App ref={this.scrollRef} {...this.props} />
          </div>
        </div>
      )
    }
  }
}

export default WithScrollFixed
