import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

interface Props {
  data: any
}

const Template: React.FC<Props> = ({ data: post }) => {
  return (
    <Layout>
      <h2>Programmatically created</h2>
      <h1>{post.markdownRemark.frontmatter.title}</h1>
      <h4>{post.markdownRemark.timeToRead} minute(s)</h4>
      <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
    </Layout>
  )
}
export default Template

export const query = graphql`
  query q($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
    }
  }
`
