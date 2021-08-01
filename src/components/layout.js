import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Helmet } from "react-helmet"
import Header from "./header"
import "./layout.css"
import { VideoPlayer } from "./videoPlayer"
import { SessionList } from "./sessionList"

const shortcodes = { VideoPlayer, SessionList }

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MDXProvider components={shortcodes}>
      <Helmet>
        <title>{data.site.siteMetadata?.title || `Title`}</title>
      </Helmet>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        ></footer>
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
