import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({
 data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        path={frontmatter.path}
      />

      <div className="container mt-5 mb-5">
          <h1 className="mb-3">{frontmatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: html }} />
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
        description
      }
    }
  }
`
