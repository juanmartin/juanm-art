import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { siteMetadata } from "../../gatsby-config"

const ProjectPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  let embeddedImages = data.mdx.frontmatter.embeddedImages
  // const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const IMAGE_KEY = "image"
  const embeddedImagesByKey =
    embeddedImages &&
    embeddedImages.reduce((images, image, index) => {
      images[`${IMAGE_KEY}${index + 1}`] = images[`${IMAGE_KEY}${index + 1}`] || {
        ...image.childImageSharp,
      }
      return images
    }, {})

  return (
    <Layout location={location} title={siteMetadata.title}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <MDXRenderer embeddedImages={embeddedImagesByKey} >{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          {/* <Bio /> */}
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={".." + previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={".." + next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default ProjectPostTemplate

export const pageQuery = graphql`query ProjectPostBySlug($slug: String!) {
  site {
    siteMetadata {
      title
    }
  }
  mdx(fields: {slug: {eq: $slug}}) {
    id
    excerpt(pruneLength: 160)
    body
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      description
      embeddedImages {
        childImageSharp {
          original {
            width
            height
            src
          }
          gatsbyImageData(quality: 90, width: 410, layout: CONSTRAINED)
        }
      }
    }
  }
}
`
