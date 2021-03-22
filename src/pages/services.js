import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Services" />

      <h1>Our Services</h1>
      <p>Our list of services</p>
      <ul>
        <li>ABC</li>
        <li>ABC</li>
      </ul>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ServicesPage
