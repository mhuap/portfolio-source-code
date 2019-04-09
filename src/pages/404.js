import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div className='full-for-center'>
    <div className='center'>
      <SEO title="404: Not found" />
      <h1>404: Not found</h1>
      <p>This page does not exist... oops.</p>
    </div>
  </div>
)

export default NotFoundPage
