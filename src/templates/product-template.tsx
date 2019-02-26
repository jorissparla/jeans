import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

interface Props {
  data: any
  location: any
}

const ProductTemplate: React.FC<Props> = ({ data, location }) => {
  const contentfulProduct = data.contentfulProduct
  return (
    <Layout>
      <div
        style={{
          marginLeft: "0 auto",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h2>
          {contentfulProduct.name} -{" "}
          <span style={{ color: "#ccc" }}>{contentfulProduct.createdAt}</span>
        </h2>
        <p>{contentfulProduct.description}</p>
        <button
          style={{
            background: "darkorange",
            color: "white",
            padding: "0.3rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          className="snipcart-add-item"
          data-item-id={contentfulProduct.slug}
          data-item-price={contentfulProduct.price}
          data-item-image={contentfulProduct.image.file.url}
          data-item-name={contentfulProduct.name}
          data-item-url={location.pathname}
        >
          Add to Cart
        </button>
        <h4>${contentfulProduct.price}</h4>
        <Img
          style={{
            marginLeft: "0 auto",
            maxWidth: 600,
          }}
          fluid={contentfulProduct.image.fluid}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      slug
      price
      description
      createdAt(formatString: "MMMM Do, YYYY, hh:mm a")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
  }
`

export default ProductTemplate
