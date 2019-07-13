import styles from "./index.scss"
import React from "react"
import { NavLink } from "react-router-dom"
import dayjs from "dayjs"

export interface CardType {
  title: string
  describe: string
  img: string
  view: number
  agreeNumber: number
  agreeing: boolean
  time: number
  likeNumber: number
  liking: boolean
  author: string
  tag: number
  tagName: string
  bid: number
}

const Card = (props: CardType) => {
  const {
    title,
    describe,
    img,
    view,
    agreeing,
    agreeNumber,
    time,
    liking,
    likeNumber,
    author,
    tagName,
    bid
  } = props

  return (
    <div className={styles.card}>
      <NavLink to={`/post/${bid}`}>
        <div className={styles.cardTop}>
          <div className="left">
            <h5>{title}</h5>
            <h6>{describe}</h6>
          </div>
          <div className={styles.right}>
            <img src={img} alt="" />
          </div>
        </div>

        <div className={styles.cardBottom}>
          <div className={styles.author}>
            <span>{tagName}</span>
            <span>·</span>
            <span>{author}</span>
            <span>·</span>
            <span>{dayjs(time).format("YYYY.MM.DD")}</span>
          </div>

          <div className={styles.cardCount}>
            <div>
              <i className="iconfont">&#xe88b;</i>
              <span>{view}</span>
            </div>
            <div>
              {agreeing ? (
                <i className="iconfont active">&#xe875;</i>
              ) : (
                <i className="iconfont">&#xe876;</i>
              )}
              <span>{agreeNumber}</span>
            </div>
            <div>
              {liking ? (
                <i className="iconfont active">&#xe873;</i>
              ) : (
                <i className="iconfont">&#xe874;</i>
              )}
              <span>{likeNumber}</span>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default Card
