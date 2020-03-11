/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/page.js`)
  const docsTemplate = path.resolve(`src/templates/docs.js`)

  const pages = await graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {glob: "${path.resolve('src/pages/*.md')}"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  const docs = await graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {glob: "${path.resolve('src/pages/docs/**/*.md')}"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (pages.errors || docs.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  pages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  docs.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: docsTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
