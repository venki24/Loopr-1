import { StaticImage } from "gatsby-plugin-image"
import React from "react"
// import AliceCarousel from 'react-alice-carousel';
// import {Carousel} from '3d-react-carousal';
// import 'react-alice-carousel/lib/alice-carousel.css';
import { getStaticQueryResults } from "../../.cache/loader"
import * as classes from "../styles/clients.module.css"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
const handleDragStart = e => e.preventDefault()
const Clients = () => {
  return (
    // <AliceCarousel mouseTracking items={items} />
    // <Carousel slides={items} arrows={false}/>
    <>
      <div className={classes.header}>
        <div>Clients</div>
        <p>
          We have worked with clients across industries, covering a wide range
          of use cases.{" "}
        </p>
      </div>
      <div className={classes.splide_move}>
        <Splide
          options={{
            loop: true,
            padding: "30px",
            arrows: false,
          }}
        >
          <SplideSlide>
            <h3 className={classes.box_no}>01</h3>
            <h1 className={classes.box_heading}>Ultratech Cement</h1>
            <div className={classes.box}>
              <div className={classes.img}>
                <StaticImage src="../images/ultratech.png" alt="img" />
              </div>
              <div className={classes.matter}>
                <p>
                  A Customized Image Search Engine to help users search for Home
                  Exterior Designs from a catalogue of designs uploaded by their
                  partner Architects and Designers
                </p>
              </div>
              <div className={classes.acheivements}>
                <div>
                  <h3>400,000+</h3>
                  <p>Images annotations done</p>
                </div>
                <div>
                  <h3> {">"} 95% </h3>
                  <p>accuracy achieved in process</p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide
            options={{
              loop: true,
              padding: "30px",
              arrows: false,
            }}
          >
            <h3 className={classes.box_no}>02</h3>
            <h1 className={classes.box_heading}>Client Name</h1>
            <div className={classes.box}>
              <div className={classes.img}>
                <StaticImage src="../images/frames.png" alt="img" />
              </div>
              <div className={classes.matter}>
                <p>
                  The clients multiple retail businesses needed a robust,
                  omnichannel search implementation. Loopr provided a scalable,
                  end-to-end solution to ease product discovery and improve
                  relevancy of results
                </p>
              </div>
              <div className={classes.acheivements}>
                <div>
                  <h3>400,000+</h3>
                  <p>Images annotations done</p>
                </div>
                <div>
                  <h3> {">"} 95% </h3>
                  <p>accuracy achieved in process</p>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  )
}

export default Clients
