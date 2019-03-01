import React from "react"
import { fromEvent } from "rxjs"
import "./index.scss"

interface PropsType {
  BeScrollComponent: any
}
class ScrollFixed extends React.Component<PropsType> {
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
    if ((pageYOffset >= 60 && !fixed) || (pageYOffset < 60 && fixed)) {
      this.setState({
        fixed: !fixed
      })
    }
  }

  render() {
    const { BeScrollComponent } = this.props
    const { fixed } = this.state
    return (
      <div className="virtial-nav-parent">
        <div className={`scroll-container ${fixed ? "fixed" : ""}`}>
          <BeScrollComponent ref={this.scrollRef} />
        </div>
      </div>
    )
  }
}

const WithScrollFixed = (props: PropsType, state: any) => {
  return <ScrollFixed {...props} {...state} />
}

export default WithScrollFixed
