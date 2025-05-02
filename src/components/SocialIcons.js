import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaBandcamp, FaSoundcloud, FaSpotify, FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

const SocialIcons = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            twitter
            soundcloud
            linkedin
            github
          }
          author {
            email
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  const { email } = data.site.siteMetadata.author

  return (
    <>
      <ul className="flex list-none ml-3">
        <li className="mr-3">
          <a
            href="https://open.spotify.com/artist/171PrQcg6CjUbkWpYLYyMH?si=0LvMaa10SMS6hIeThpSmHw"
            target="_blank"
            rel="noreferrer"
          >
            <FaSpotify alt="Spotify" className="no-underline" style={{float:'left'}} />
          </a>
        </li>
        <li className="mr-3">
          <a
            href="https://jaun.bandcamp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaBandcamp alt="Bandcamp" className="no-underline" style={{float:'left'}} />
          </a>
        </li>
        <li className="mr-3">
          <a
            href={"https://soundcloud.com/" + social.soundcloud}
            target="_blank"
            rel="noreferrer"
          >
            <FaSoundcloud alt="Soundcloud" className="no-underline" style={{float:'left'}} />
          </a>
        </li>
        <li className="mr-3">
          <a
            href={"https://linkedin.com/in/" + social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin alt="Linkedin" className="no-underline" style={{float:'left'}} />
          </a>
        </li>
        <li className="mr-3">
          <a
            href={"https://twitter.com/" + social.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter alt="Twitter" className="no-underline" style={{float:'left'}} />
          </a>
        </li>
        <li className="mr-3">
          <a
            href={"https://github.com/" + social.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub alt="Github" className="no-underline" style={{float:'left'}} />
          </a>
        </li>
        <li className="mr-3">
          <a
            href={"mailto:" + email}
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope alt="Email" className="no-underline" style={{float:'left'}} />
          </a>
        </li>
      </ul>
    </>
  )
}

export default SocialIcons
