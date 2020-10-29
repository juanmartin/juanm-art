const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPost = path.resolve(`./src/templates/project-post.js`)
  const Page = path.resolve(`./src/templates/page.js`)
  const result = await graphql(`
    {
      posts: allMdx(
        filter: { fileAbsolutePath: { regex: "/(blog)/" } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      projects: allMdx(
        filter: { fileAbsolutePath: { regex: "/(projects)/" } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      pages: allMdx(
        filter: { fileAbsolutePath: { regex: "/(pages)/" } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.posts.edges
  const projects = result.data.projects.edges
  const pages = result.data.pages.edges
  // console.log("resultado", result)
  // console.log("posts", posts)
  // console.log("projects", projects)
  // console.log("pages", pages)

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    //blog
    createPage({
      path: "blog" + post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
  projects.forEach((post, index) => {
    const previous = index === projects.length - 1 ? null : projects[index + 1].node
    const next = index === 0 ? null : projects[index - 1].node
    // projects
    createPage({
      path: "projects" + post.node.fields.slug,
      component: projectPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
  pages.forEach((post, index) => {
    const previous = index === pages.length - 1 ? null : pages[index + 1].node
    const next = index === 0 ? null : pages[index - 1].node
    // Pages
    createPage({
      path: post.node.fields.slug,
      component: Page,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  createPage({
    path: "/",
    component: Page,
    context: {
      slug: "/home/"
    }
  })

  // Create blog post list pages
  const postsPerPage = 5
  const numPagesPosts = Math.ceil(posts.length / postsPerPage)
  const numPagesProjects = Math.ceil(projects.length / postsPerPage)
  // blog
  Array.from({ length: numPagesPosts }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPagesPosts,
        currentPage: i + 1,
      },
    })
  })
  // projects
  Array.from({ length: numPagesProjects }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/projects` : `/projects/${i + 1}`,
      component: path.resolve("./src/templates/project-list.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPagesProjects,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
