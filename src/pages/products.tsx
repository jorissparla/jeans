import * as React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

interface Props {
  data: any
}

const Products: React.FC<Props> = ({ data }) => {
  const nodes = data.edges
  return (
    <Layout>
      <div>
        {data.allContentfulProduct.edges.map(({ node: product }) => {
          return (
            <div key={product.id}>
              <h2> Jeans Product</h2>
              <Link
                to={`/products/${product.slug}`}
                style={{ textDecoration: "none", color: "#551a8b" }}
              >
                <h3>
                  {product.name} . {` `}{" "}
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 300,
                      color: "#f60",
                    }}
                  >
                    ${product.price}
                  </span>
                </h3>
              </Link>
              <Img fluid={product.image.fluid} style={{ maxWidth: 400 }} />
            </div>
          )
        })

        /* all products */
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          price
          description
          image {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Products
