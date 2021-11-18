import React from "react"
import * as styles from "../styles/women.module.css"
import Layout from "./layout"
function WomenEmpowerment() {
  return (
    <div>
      <div className={styles.women}>
        <div className={styles.group1}>
          <div className={styles.women_image}>
            <div className={styles.color1}></div>
          </div>
          <div className={styles.whiteboard}>
            <h1 className={styles.women_heading}>Empowering women</h1>
            <p className={styles.women_paragraph}>
              Loopr's Data Annotation team is empowered by <br />
              women from disadvantaged backgrounds.Our <br />
              proud partners in the data labelling processes,
              <br />
              these women are helping bussinesses of all sizes <br />
              to grow using intelligent automation.
              <h3>Know More</h3>
            </p>
          </div>

          {/* <div className={styles.know_more}>
            
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default WomenEmpowerment
