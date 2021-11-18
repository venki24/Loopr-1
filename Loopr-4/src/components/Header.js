import React from "react"
import * as styles from "../styles/layout1.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Header() {
  const data = useStaticQuery(graphql`
    query Logo1 {
      file(relativePath: { eq: "looprlogo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data?.Logo1?.childImageSharp?.fluid)
  const picture = data?.Logo1?.childImageSharp?.fluid
  return (
    <div>
      <div className={styles.nav1}>
        <div className={styles.nav_items}>
          {/* <img src="../images/looprlogo.png" className={styles.logo} /> */}

          <StaticImage
            src="../images/looprlogobig.png"
            alt="logo"
            className={styles.logo}
          />
          <div className={styles.rectangle} />
          <StaticImage src="../images/dial2.png" className={styles.dial} />
        </div>
      </div>
    </div>
  )
}

export default Header
