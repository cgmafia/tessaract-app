import React from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const DemobrowserPage = () => {
    return (
        <Layout>
        <SEO title="demo-gallery" />
  
        <h1>Browse Our Demo Projects</h1>
        <p>Gallery</p>
        
        
  
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
}
export default DemobrowserPage;