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
    navScrollsub: any

    state = {
      fixed: false
    }

    componentDidMount() {
      this.bindScrollToFixed()
    }

    componentWillUnmount() {
      // this.navScrollsub && this.navScrollsub.unsubscribe()
    }

    bindScrollToFixed = () => {
      const scrollRefDOM = this.scrollRef.current
      if (scrollRefDOM) {
        const navScroll$ = fromEvent(window, "scroll")
        this.navScrollsub = navScroll$.subscribe(this.listenerScroll)
        console.log(this.navScrollsub)
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
