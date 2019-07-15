import React from "react"
import styles from "./index.scss"

const SignFooter = () => {
  return (
    <div className={styles.footer}>
      <div>
        <span className={styles.line} />
        <span className={styles.info}>Fizz 将会保护您的隐私</span>
        <span className={styles.line} />
      </div>
      <div className={styles.logos}>
        <a href="https://github.com/fyber-LJX/fizz">
          <i className={`iconfont ${styles.othersLogo}`}>&#xead8;</i>
        </a>
      </div>
    </div>
  )
}

export default SignFooter
