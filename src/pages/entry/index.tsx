import React from "react"
import { entryList } from "./modle"
import { BlogEntry } from "src/shared/models/blog"
import EntryItem from "./../../components/entry-item"
import "./index.scss"
import PopularBox from "./components/popular"

interface PropsType {}

interface StateType {}

export default class BlogList extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props)
  }

  render() {
    return (
      <div className="fizz-entry sona-flex">
        <article className="article-side sona-mr-60">
          <div className="entry-list">
            {entryList &&
              entryList.map((entry: BlogEntry) => (
                <EntryItem key={entry.id} entry={entry} />
              ))}
          </div>
        </article>
        <aside className="aside">
          <PopularBox list={entryList.slice(0, 5)} />
        </aside>
      </div>
    )
  }
}
