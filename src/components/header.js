import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Hero } from "./hero"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header
    style={{
      background: `fff`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        maxHeight: "140px",
        paddingLeft: "2em",
        paddingRight: "2em",
        backgroundColor: "#fff",
      }}
    >
      <Link to="/">
        <StaticImage
          src={"../images/logo.png"}
          quality={95}
          placeholder="none"
          height={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Logo"
        />
      </Link>
    </div>
    <Hero />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
