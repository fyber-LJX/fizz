import React from "react"
import { BlogEntry } from "src/shared/models/blog"

interface PropsType {
    entry: BlogEntry
}

export default class EntryItem extends React.Component<PropsType> {
    render() {
        const { entry } = this.props
        return <div className="entry-item">{entry.title}</div>
    }
}
