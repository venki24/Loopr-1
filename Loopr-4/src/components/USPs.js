import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as classes from "../styles/usps.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Monitor1 from "../images/SVGs/Monitor1";
import Monitor2 from "../images/SVGs/Monitor2";
function USPs() {
  return (
    <div>
      <div className={classes.background_color}>
        <div className={classes.header}>
          <h2>Offerings</h2>
          <p>
            Loopr offers end-to-end solutions in the AI lifecyle, from data
            labeling to creating customized models as per your business
            requirements.{" "}
          </p>
        </div>
        <div className={classes.monitor1}>
          {/* <StaticImage
            src="../images/monitor2.png"
            alt="img"
            className={classes.img1}
          /> */}
          <Monitor1/>
          <h3>01</h3>
          <div className={ classes.arrow_usp}>
            <span className={ classes.loopr_data}>Loopr Data</span><span><FontAwesomeIcon icon={faArrowRight}/></span> 
          </div>

          <p>
            Every AI model needs high quality data. And Loopr equips your team
            with the best labeling tools for quicker, convenient, and more
            efficient data annotation.
          </p>
        </div>
        <div className={classes.monitor2}>
          {/* <StaticImage
            src="../images/monitor1.png"
            alt="img"
            className={classes.img2}
          /> */}
          <Monitor2 className={classes.monitor2_svg}/>
          <h3>02</h3>
          <div className={ classes.arrow_usp}>
          <span className={ classes.loopr_data}>Loopr Data</span><span><FontAwesomeIcon icon={faArrowRight}/></span>
          </div>
          <div className={classes.monitor2_p}>
            <p>
              Every AI model needs high quality data.And Loopr equips your team
              with the best labeling tools for quicker,convenient,and more
              efficient data annotation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default USPs
