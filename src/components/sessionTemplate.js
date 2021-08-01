import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"

// aboved query will return data
const SessionTemplate = ({ data }) => {
  const session = data.allMdx.nodes[0]
  return (
    <Layout>
      <h1>{session.frontmatter.title}</h1>
      <MDXRenderer>{session.body}</MDXRenderer>
      <h1>Speakers</h1>
      {session.frontmatter.speakers.map(s => (
        <div style={{ textAlign: "center" }}>{s}</div>
      ))}
      <div style={{ textAlign: "center" }}>
        <br />
        <Link style={{ textDecoration: "none" }} to="/">
          go back
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MdxBlogPost($id: String) {
    allMdx(filter: { id: { eq: $id } }) {
      nodes {
        slug
        body
        frontmatter {
          title
          speakers
        }
      }
    }
  }
`

export default SessionTemplate
