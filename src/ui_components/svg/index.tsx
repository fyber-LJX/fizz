import React from "react"

interface SvgType {
  name: string
}

const SVG = (props: SvgType) => {
  const { name } = props
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default SVG
