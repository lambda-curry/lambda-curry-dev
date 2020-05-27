import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
export default function Template({
  data: {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  }, // this prop will be injected by the GraphQL query below.
}) {
  return (
    <div className="blog-post-container">
      <Helmet title={title}></Helmet>
      <div className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
