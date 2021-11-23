import React from "react"
import * as styles from "../styles/usps.module.css";
import { StaticImage } from "gatsby-plugin-image"
import Rect from "../images/SVGs/rect"
import Piggy from "../images/SVGs/piggy";
import Badge from "../images/SVGs/badge";
function USPs() {
  return (
    <>
    <div  className={styles.main}>
      <div className={styles.color1}>
        <div className={styles.header}>
          <h1>Our USPs</h1>
          <p>
            We aim to improve our client's overall bussiness <br />
            processes and bottom line with every product we have.
          </p>
        </div>
        <div className={styles.one}>
          <div className={styles.one_img}>
            {/* <StaticImage
              src="../images/badge3.png"
              alt="badge"
              className={styles.badge3}
            /> */}
            <Badge height={70} width={70}/>
          </div>
          <div>
            <h3>01</h3>
            <h1>Quality</h1>
            <p>
              Best in class labelling tools and models along with a skilled data
              annotation team.
            </p>
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.two_img}>
            {/* <StaticImage src="../images/rect2.jpg" alt="react" /> */}
            <Rect width={70} height={70}/>
          </div>
          <div>
            <h3>02</h3>
            <h1>Scalability</h1>
            <p>
              We offer an adaptable solution to meet your workflow needs,
              letting you easily scale and switch capacity.
            </p>
          </div>
        </div>
        <div className={styles.three}>
          <div className={styles.three_img}>
            {/* <StaticImage src="../images/pig2.jpg" alt="piggy bank" /> */}
            <Piggy width={70} height={70}/>
          </div>
          <div>
            <h3>03</h3>
            <h1>Cost effective</h1>
            <p>
              An affordable solution covering data workflows, labelling and
              implementing deep learning models.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default USPs;
