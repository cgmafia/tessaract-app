import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <h1>Contact Us</h1>
        <p>Content goes here</p>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ContactPage
