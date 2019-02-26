import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

type PageContext = {
  isFirstPage: number
  isLastPage: number
  currentPage: number
  totalPages: number
}
interface Props {
  data: any
  pageContext: PageContext
}

const Blog: React.FC<Props> = ({ data, pageContext }) => {
  const blogs = data.allMarkdownRemark.edges
  const { currentPage, totalPages, isFirstPage, isLastPage } = pageContext
  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${String(currentPage - 1)}`
  return (
    <Layout>
      <div>
        <h1 style={{ display: "inline-block", borderBottom: "1px solid" }}>
          Jeans Blog
        </h1>
        <>
          <h4>{data.allMarkdownRemark.totalCount} posts</h4>
          {blogs.map(({ node }) => {
            return (
              <div key={node.id}>
                <h3>
                  <Link to={`/posts/${node.fields.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                  <span style={{ color: "#bbb" }}>
                    - {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </div>
            )
          })}
        </>
        <div
          style={{
            padding: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            maxWidth: 300,
          }}
        >
          {!isFirstPage && (
            <Link to={prevPage} rel="prev">
              Prev Page
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, index) => {
            return (
              <Link key={index} to={`/blog/${index === 0 ? "" : index + 1}`}>
                {index + 1}
              </Link>
            )
          })}
          {!isLastPage && (
            <Link to={nextPage} rel="next">
              Next Page
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          fileAbsolutePath
          html
          excerpt
          frontmatter {
            title
            date(fromNow: true)
            od: date
          }
        }
      }
    }
  }
`
