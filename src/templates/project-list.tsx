// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { GatsbyImage } from "gatsby-plugin-image";

type PageContext = {
  currentPage: number
  numPagesProjects: number
}
type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMdx: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          featuredImage: {
            childImageSharp: {
              fluid: {
                aspectRatio: number
                base64: string
                sizes: string
                src: string
                srcSet: string
              }
            }
          }
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const ProjectIndex = ({
  data,
  location,
  pageContext,
}: PageProps<Data, PageContext>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const { currentPage, numPagesProjects } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPagesProjects
  const prevPage = currentPage - 1 === 1 ? "/projects" : "/projects/" + (currentPage - 1).toString()
  const nextPage = isFirst ? "./projects/" + (currentPage + 1).toString() : "./projects" + (currentPage + 1).toString()

  const imgs = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="md:flex flex-row flex-wrap flex-grow mt-5 widthOverride gap-3">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const featuredImage = node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
          return (
            <Link
              className="shadow-none"
              style={{ color: 'var(--textNormal)' }}
              to={
                isFirst ? "." + node.fields.slug : ".." + node.fields.slug
              }
            >
              <article
                key={node.fields.slug}
                className="md:w-72 h-full p-3 transition duration-200 ease-in-out 
              hover:shadow-3xl shadow-close rounded 
              hover:border-red-400 border-opacity-5 hover:border-opacity-100"
              >

                <div className="group bg-gradient-to-br from-red-200 to-orange-300">
                  <GatsbyImage
                    image={featuredImage}
                    className="h-64 md:h-40 -mb-10 transition duration-125 ease-in-out
                mix-blend-hard-multiply filter opacity-75 group-hover:filter-none" />
                </div>

                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                    className="group-hover:text-white"
                  >
                    {title}
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            </Link>
          );
        })}
      </div>

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
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
          </li>
          <li>
            {!isLast && (
              <Link to={"../" + nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
}

export default ProjectIndex

export const pageQuery = graphql`query projectPageQuery($skip: Int!, $limit: Int!) {
  site {
    siteMetadata {
      title
    }
  }
  allMdx(
    filter: {fileAbsolutePath: {regex: "/(projects)/"}, fields: {draft: {eq: false}}}
    sort: {fields: [frontmatter___date], order: DESC}
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(quality: 100, width: 300, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`
