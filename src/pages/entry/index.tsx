import React from "react"
import { entryList } from "./modle"
import { BlogEntry } from "src/shared/models/blog"
import EntryItem from "./../../components/entry-item"
import "./index.scss"

interface PropsType {}

interface StateType {}

export default class BlogList extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props)
  }

  render() {
    return (
      <div className="fizz-entry">
        <article className="article-side sona-ml-20">
          <div className="entry-list">
            {entryList &&
              entryList.map((entry: BlogEntry) => (
                <EntryItem key={entry.id} entry={entry} />
              ))}
          </div>
        </article>
        <aside />
      </div>
    )
  }
}
