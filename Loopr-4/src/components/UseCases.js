import { StaticImage } from "gatsby-plugin-image"
import React from "react"
// import AliceCarousel from 'react-alice-carousel';
// import {Carousel} from '3d-react-carousal';
// import 'react-alice-carousel/lib/alice-carousel.css';
import { getStaticQueryResults } from "../../.cache/loader"
import * as classes from "../styles/usecases.module.css"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
const handleDragStart = e => e.preventDefault()
const UseCases = () => {
  return (
    // <AliceCarousel mouseTracking items={items} />
    // <Carousel slides={items} arrows={false}/>
    <>
      <div className={classes.header}>
        <div>Use Cases</div>
        <p>
          Resolve complex problems with <br />
          AI-powered process and innovative <br />
          machine learning
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
            <h1 className={classes.box_heading}>Document Parsing</h1>
            <div className={classes.box}>
              <div className={classes.img}>
                <StaticImage src="../images/usecase2.png" alt="img" />
              </div>
              <div className={classes.matter}>
                <p>
                  A better search experience with improved search
                  relevancy,image search,custom results and more
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide
            options={{
              loop: true,
              padding: "20px",
              arrows: false,
            }}
          >
            <h3 className={classes.box_no}>02</h3>
            <h1 className={classes.box_heading}>Search Relevancy</h1>
            <div className={classes.box}>
              <div className={classes.img}>
                <StaticImage src="../images/usecase1.png" alt="img" />
              </div>
              <div className={classes.matter}>
                <p>
                  A better search experience with improved search
                  relevancy,image search,custom results and more
                </p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  )
}

export default UseCases
