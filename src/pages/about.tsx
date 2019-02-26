import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

const ALL_IMAGES = graphql`
  query all {
    allFile {
      edges {
        node {
          absolutePath
          relativePath
        }
      }
    }
  }
`

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <Layout>
      <StaticQuery
        query={ALL_IMAGES}
        render={data => {
          const images = data.allFile.edges.map(({ node }) => node.relativePath)
          console.log(images)
          return (
            <div>
              <img src={images[0]} />
            </div>
          )
        }}
      />
      <h1>About Page</h1>
      <Link to="/">Home</Link>
    </Layout>
  )
}
export default About
