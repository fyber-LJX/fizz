import React from "react"
import { BlogEntry } from "src/shared/models/blog"
import WithScrollFixed from "./../../../../components/scroll-fixed"

interface PropsType {
  list?: Array<BlogEntry>
}

class PopularBox extends React.Component<PropsType> {
  render() {
    const { list = [] } = this.props
    return (
      <div className="popular">
        <h3
          className="sona-font-18 sona-pl-10 sona-border-B1"
          style={{ height: "60px" }}
        >
          更多受欢迎的作品
        </h3>
        <div className="popular-list sona-padding-10">
          {list.length > 0 &&
            list.map((item: BlogEntry, index: number) => (
              <div
                className="popular-item sona-flex sona-border-B1 sona-mb-10"
                key={item.id}
              >
                <h3
                  className="sona-font-16 fizz-font-secondary sona-mr-10 sona-pt-5"
                  style={{ width: "20px" }}
                >
                  <em>{index + 1 < 10 ? `0${index + 1}` : index + 1}</em>
                </h3>
                <div className="sona-flex-column">
                  <h3 className="sona-font-16 sona-line-height-24 sona-mb-10">
                    {item.title}
                  </h3>
                  <div className="sona-font-14 sona-line-height-18 sona-mb-10">
                    {item.author}
                  </div>
                  <div className="fizz-font-secondary sona-font-12 sona-mb-10 sona-line-height-14">
                    <span className="publime-time sona-mr-5">
                      {item.publicTime}
                    </span>
                    <span>·</span>
                    <span className="read-time sona-ml-5">
                      {item.readTime} min read
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default WithScrollFixed({
  App: PopularBox,
  top: 80,
  threshold: 95
})
