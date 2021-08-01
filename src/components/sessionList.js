import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"

export const SessionList = () => {
  const data = useStaticQuery(graphql`
    query SESSION_LIST_QUERY {
      allMdx(
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { fileAbsolutePath: { regex: "/sessions/" } }
      ) {
        nodes {
          id
          frontmatter {
            title
            speakers
            date(formatString: "HH:mm")
          }
          slug
        }
      }
    }
  `)
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <table style={{ maxWidth: "500px" }}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Session</th>
          </tr>
        </thead>
        <tbody>
          {data.allMdx.nodes.map(({ id, frontmatter, slug }) => (
            <tr key={id}>
              <td>{frontmatter.date}</td>
              <td>
                <Link style={{ textDecoration: "none" }} to={`/${slug}`}>
                  {frontmatter.title}
                </Link>
                <div style={{ fontSize: "0.8em" }}>
                  {frontmatter.speakers.join(" | ")}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    // <div style={{ textAlign: "center" }}>
    //   {data.allMdx.nodes.map(({ id, frontmatter, slug }) => (
    //     <div>
    //       <h2>
    //         <Link style={{ textDecoration: "none" }} to={`/${slug}`}>
    //           {frontmatter.date} - {frontmatter.title}
    //         </Link>
    //       </h2>
    //     </div>
    //   ))}
    // </div>
  )
}
