import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Tessaract Hub</h1>
    <p>Share your technical blood and evolve with us</p>
    
    <p>
    <button>Login with SMS</button><br/>
    </p>
  </Layout>
)

export default IndexPage
