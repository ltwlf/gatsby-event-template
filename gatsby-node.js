exports.createResolvers = async ({ createResolvers }) => {
  const resolvers = {
    Query: {
      sessions: {
        type: [`Mdx`],
        resolve: async (source, args, context, info) => {
          const all = context.nodeModel.getAllNodes({ type: `Mdx` })

          return all.filter(x => x.fileAbsolutePath.match(`/sessions/`))
        },
      },
    },
  }
  createResolvers(resolvers)
}

// gatsby give utility methods actions, graphql, reporter
// reporter is gatsby console log
exports.createPages = async ({ actions, graphql, reporter }) => {
  // passing only slug, so accg to page we will fetch the rest of the data
  const sessions = await graphql(`
    query {
      sessions {
        id
        slug
      }
    }
  `)
  // check the error scenario
  if (sessions.errors) {
    reporter.panic("failed to craete post", result.errors)
  }

  // need to iterarte through the posts so using forEach here
  sessions.data.sessions.forEach(session => {
    actions.createPage({
      path: session.slug,
      component: require.resolve("./src/components/sessionTemplate.js"),
      context: {
        id: session.id,
      },
    })
  })
}
