import React from "react"
import styles from "./index.scss"

interface SvgType {
  name: string
  active?: boolean
}

const SVG = (props: SvgType) => {
  const { name, active } = props
  const className = `${styles.icon} ${active ? styles.active : ""}`
  console.log(className)
  return (
    <svg className={className} aria-hidden="true">
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default SVG
