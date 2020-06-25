import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <div style={{ color: `teal`, margin: 50 }}>
        <h1>About Gatsby</h1>
        <p>This is the about test page -&gt; demo only</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}
