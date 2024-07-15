import React from 'react'
import styles from "../Styles/techStack.module.css"
const TechStack = () => {
  return (
    <div className={styles.tech}>
      <button><b>HTML</b></button>
      <button><b>CSS</b></button>
      <button><b>Javascript</b></button>
      <button><b>React</b></button>
      <button><b>Redux</b></button>
      <button><b>Chakra UI</b></button>
      <button><b>Restful-API</b></button>
      {/* <button><b>Docker</b></button> */}
    </div>
  )
}

export default TechStack
