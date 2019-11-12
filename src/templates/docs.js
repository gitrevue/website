import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import SEO from '../components/seo'

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout MainComponent="div">
      <SEO title={frontmatter.title} />

      <div className="documentation container mb-5">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <h1 className="mt-0 mb-3">{frontmatter.title}</h1>

            <main dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
