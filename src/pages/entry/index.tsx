import React from "react"
import { entryList } from "./modle"
import { BlogEntry } from "src/shared/models/blog"
import EntryItem from "./../../components/entry-item"

interface PropsType {}

interface StateType {}

export default class BlogList extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
    }

    render() {
        console.log(entryList)
        return (
            <div className="fizz-entry">
                <article>
                    <div className="entry-list">
                        {entryList &&
                            entryList.map((entry: BlogEntry) => {
                                ;<EntryItem entry={entry} />
                            })}
                    </div>
                </article>
                <aside />
            </div>
        )
    }
}
