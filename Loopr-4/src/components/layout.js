/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { useStaticQuery } from "../../.cache/gatsby-browser-entry"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import Header from "./Header"
import * as styles from "../styles/layout1.module.css"
import * as styles1 from "../styles/women.module.css"
// import { FaBeer } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.banner}>
        <div className={styles.group}>
          <div className={styles.group1}>
            <div className={styles.group2}>
              <div className={styles.heading_text1}>
                Automate Growth <br /> for your bussiness
              </div>
              <p className={styles.paragraph_text2}>
                Implement Ai solutions faster with a data annotation platform
                and ready to use AI models.
              </p>
            </div>

            <div className={styles.demo}>
              <div>
                <button className={styles.demo_button}>
                  <p>Get a Demo</p>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.scroll_div}>
            <div className={styles.scroll}>
              <span>Scroll</span> <span className={styles.scroll_arrow}><FontAwesomeIcon icon={faArrowDown}/></span>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div>
        <div className={styles1.women}>
          <div className={styles1.group1}>
            <div className={styles1.women_image}>
              <div className={styles1.color1}></div>
            </div>
            <div className={styles1.whiteboard}>
              <h1 className={styles1.women_heading}>Empowering women</h1>
              <p className={styles1.women_paragraph}>
                Loopr's Data Annotation team is empowered by <br />
                women from disadvantaged backgrounds.Our <br />
                proud partners in the data labelling processes,
                <br />
                these women are helping bussinesses of all sizes <br />
                to grow using intelligent automation.
                <div className={styles.know_more}>
                <span>Know More</span><span><FontAwesomeIcon icon={faArrowRight}/></span>
                </div>
              </p>
              
            </div>

            {/* <div className={styles.know_more}>
            
          </div> */}
          </div>
        </div>
      </div>

      <section className={styles.footer}>
        <h1>Get started now!</h1>
        <p>
          Have a usecase or problem statement? or just curios? <br />
          We are just one email away.{" "}
        </p>

        <input
          type="email"
          placeholder="yourname@example.com"
          className={styles.input_email}
        ></input>
        <button>
          <h3>Send</h3>
        </button>
        <div className={styles.content_1}>
          <div className={styles.content}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Industries</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.ul_right}>
            <ul>
              <li>
                <a href="#">
                  <span>
                    <FontAwesomeIcon
                    icon={faEnvelope}
                    // size="1x"
                    
                  />
                  </span>
                  <span className={styles.span_email}>email@loopr.com</span>
                </a>
              </li>
              <li>
                <a href="#">
                  
                  <span><FontAwesomeIcon icon={faPhone} size="0x" rotation="90" /></span>
                  <span>+91 9934579764</span>
                </a>
              </li>
              <li>
                <a href="#">
                  
                  <span><FontAwesomeIcon icon={faPhone} size="0x" rotation="90" /></span>
                  <span>+91 9842329003</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} color="blue" size="2x" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} color="blue" size="2x" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} color="blue" size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Layout
