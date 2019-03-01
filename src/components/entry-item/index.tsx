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
      author
    } = entry
    return (
      <article
        className="entry-item sona-flex-justify-SB sona-mb-30"
        style={{ maxHeight: "150px" }}
      >
        <div className="sona-flex-column">
          <div className="time-info fizz-font-secondary sona-font-12 sona-mb-5">
            <span className="publime-time sona-mr-5">{publicTime}</span>
            <span>·</span>
            <span className="read-time sona-ml-5">{readTime} min read</span>
          </div>
          <h3 className="sona-font-24 sona-mb-10">
            <strong>{title}</strong>
          </h3>
          <div className="description fizz-font-secondary sona-mb-15">
            {description}
          </div>
          <div className="author-info sona-font-14 sona-mh-5">
            <span className="author">{author}</span>
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
        <div className="img" style={{ width: "150px" }}>
          <img src={image} style={{ objectFit: "fill" }} alt={title} />
        </div>
      </article>
    )
  }
}
