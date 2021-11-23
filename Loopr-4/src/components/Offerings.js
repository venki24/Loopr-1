import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as classes from "../styles/offerings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Monitor1 from "../images/SVGs/Monitor1";
import Monitor2 from "../images/SVGs/Monitor2";
function Offerings() {
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
          <StaticImage
            src="../images/monitorpng1.png"
            alt="img"
            className={classes.img1}
          />
          {/* <Monitor1 className={classes.monitor1_svg} width={50} height={50} /> */}
          <h3>01</h3>
          <div className={ classes.arrow_usp1}>
            <span className={ classes.loopr_data}>Loopr Data</span><span><FontAwesomeIcon icon={faArrowRight}/></span> 
          </div>

          <p>
            Every AI model needs high quality data. And Loopr equips your team
            with the best labeling tools for quicker, convenient, and more
            efficient data annotation.
          </p>
        </div>
        <div className={classes.monitor2}>
          <StaticImage
            src="../images/monitorpng2.png"
            alt="img"
            className={classes.img2}
          />
          {/* <Monitor2 className={classes.monitor2_svg}/> */}
          <h3>02</h3>
          <div className={ classes.arrow_usp}>
          <span className={ classes.loopr_data}>Loopr Models</span><span><FontAwesomeIcon icon={faArrowRight}/></span>
          </div>
          <div className={classes.monitor2_p}>
            <p>
            Ready to use and customizable deep learning models that help businesses implement intelligent processes for a variety of use cases in less than 8 weeks.

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offerings;
