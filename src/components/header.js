import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GatsbyIcon from "../images/gatsby-icon.png"

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <Link getProps={isActive} {...props} />

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2293FF`,
      alignItems: "center",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        <img
          src={GatsbyIcon}
          alt="logo"
          style={{
            width: "50px",
            margin: "0 5px",
            borderRadius: "50%",
            border: "3px solid orange",
          }}
        />
        <h1 style={{ margin: 0 }}>
          <NavLink to="/">{siteTitle}</NavLink>
        </h1>
      </span>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/products">To Store</NavLink>
      {/* Shopping cart Summary */}
      <div
        className="snipcart-summary snipcart-checkout"
        style={{ color: "white", cursor: "pointer" }}
      >
        <div>
          <strong>My Cart</strong>
        </div>
        <div>
          <span
            className="snipcart-total-items"
            style={{ fontWeight: "bold" }}
          />{" "}
          items in cart
        </div>
        <div>
          Total price{" "}
          <span
            className="snipcart-total-price"
            style={{ fontWeight: "bold" }}
          />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
