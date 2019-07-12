import styles from "./index.scss"
import React from "react"

export interface CardType {
  title: string
  describe: string
  img: string
  view: number
  agree: number
  time: number
  liking: boolean
  author: string
  tag: number
  tagName: string
}

const Card = (props: CardType) => {
  const {
    title,
    describe,
    img,
    view,
    agree,
    time,
    liking,
    author,
    tagName
  } = props

  return (
    <div className={styles.card}>
      <div className="left">
        <h4>{title}</h4>
        <h5>{describe}</h5>
        <div />
      </div>
      <div className="imgBox">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Card
