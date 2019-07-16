import style from "./index.scss"
import React from "react"
import Card from "src/components/card"
import TopNav from "src/components/top_nav"
import QueueAnim from "rc-queue-anim"

const mockData = [
  {
    title: "你不知道的JavaScript",
    describe: "你知道的Java",
    img:
      "//t16img.yangkeduo.com/mms_static/d951af411dd5e7b13aada3d7aa001097.png",
    view: 1231,
    agreeNumber: 1231,
    agreeing: false,
    time: 1231,
    likeNumber: 1231,
    liking: false,
    author: "fyber",
    tag: 1231,
    tagName: "Javascript",
    bid: 93818
  },
  {
    title: "你不知道的JavaScript",
    describe: "你知道的Java",
    img:
      "//t16img.yangkeduo.com/mms_static/d951af411dd5e7b13aada3d7aa001097.png",
    view: 1231,
    agreeNumber: 1231,
    agreeing: false,
    time: 1231,
    likeNumber: 1231,
    liking: false,
    author: "吴星昊",
    tag: 1231,
    tagName: "Java",
    bid: 93818
  },
  {
    title: "你不知道的JavaScript",
    describe: "你知道的Java",
    img: "./../../../WechatIMG1418.png",
    view: 1231,
    agreeNumber: 1231,
    agreeing: true,
    time: 1231,
    likeNumber: 1231,
    liking: true,
    author: "徐奇",
    tag: 1231,
    tagName: "React",
    bid: 93818
  }
]

const Tags = [
  {
    name: "React",
    id: 9
  },
  {
    name: "Java",
    id: 12
  },
  {
    name: "JavaSctipt",
    id: 999
  }
]

const list = [
  {
    name: "推荐",
    id: 0,
    path: "recommended"
  },
  {
    name: "前端",
    id: 4,
    path: "frontend"
  },
  {
    name: "后端",
    id: 5,
    path: "backend"
  },
  {
    name: "人工智能",
    id: 6,
    path: "ai"
  },
  {
    name: "阅读",
    id: 7,
    path: "read"
  },
  {
    name: "算法",
    id: 8,
    path: "algorithm"
  },
  {
    name: "数据结构",
    id: 9,
    path: "structure"
  },
  {
    name: "数据库",
    id: 10,
    path: "database"
  }
]
const HomeComponent = () => {
  return (
    <div className={style.home}>
      <TopNav list={list} />
      <div className={style.content}>
        <article>
          <QueueAnim className={style.cardBox}>
            {mockData.map(item => (
              <Card {...item} key={item.bid} />
            ))}
          </QueueAnim>
        </article>
        <aside>
          <div className={style.hot}>
            <h4>热门标签</h4>
            <div className={style.hotItem}>
              {Tags.map(item => (
                <div className={style.tag}>{item.name}</div>
              ))}
            </div>
          </div>

          <div className={style.hot}>
            <h4>热门文章</h4>
            <div className={style.hotItem}>
              {Tags.map(item => (
                <div className={style.tag}>{item.name}</div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default HomeComponent
