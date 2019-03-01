import React from "react"
import { BlogEntry } from "src/shared/models/blog"
import { MulHeartOutlineSVG, EyeOutlineSVG } from "../svg"

interface PropsType {
  entry: BlogEntry
}

const svgSpanStyle = {
  verticalAlign: "text-top",
  marginLeft: "3px"
}

export default class EntryItem extends React.Component<PropsType> {
  render() {
    const { entry } = this.props
    const {
      title,
      image,
      description,
      publicTime,
      readTime,
      pv,
      praise,
      author,
      category
    } = entry
    return (
      <article className="entry-item sona-flex-justify-SB sona-mb-30">
        <div
          className="sona-flex-column"
          style={{ width: "510px", height: "100px" }}
        >
          <div className="time-info fizz-font-secondary sona-font-12 sona-mb-5">
            <span className="author">{author}</span>
            <span className=" sona-mv-5">·</span>
            <span className="publime-time">{publicTime}</span>
            <span className=" sona-mv-5">·</span>
            <span className="read-time">{readTime} min read</span>
            <span className=" sona-mv-5">·</span>
            <span className="read-time">{category}</span>
          </div>
          <h3 className="sona-font-18 sona-mb-10 sona-line-height-24">
            {title}
          </h3>
          <div className="description fizz-font-secondary sona-mb-10 sona-line-height-24">
            {description}
          </div>
          <div className="action sona-font-12 sona-flex fizz-font-secondary">
            <div className="sona-mr-20">
              <span>
                <MulHeartOutlineSVG />
              </span>
              <span style={svgSpanStyle}>{praise}</span>
            </div>
            <div className="sona-mr-20">
              <EyeOutlineSVG />
              <span style={svgSpanStyle}>{pv}</span>
            </div>
          </div>
        </div>
        <div
          className="img sona-br-4"
          style={{ width: "150px", height: "100px", overflow: "hidden" }}
        >
          <img
            src={image}
            style={{ objectFit: "fill", height: "100%" }}
            alt={title}
          />
        </div>
      </article>
    )
  }
}
