import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Offerings from "../components/Offerings"
import UseCases from "../components/UseCases"
import Clients from "../components/Clients"
import USPs from "../components/USPs"
const IndexPage = () => (
  <Layout>
    <UseCases />
    <Offerings />
    <USPs />

    <Clients />
  </Layout>
)

export default IndexPage
