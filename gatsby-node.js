/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter: { panicOnBuild },
}) => {
  const pageTemplate = require.resolve(`./src/md-pages/page-template.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        path: slug,
        component: pageTemplate,
        context: {
          // additional data can be passed via context
          slug,
        },
      })
    }
  )
}
