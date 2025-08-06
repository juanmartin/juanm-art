import React from "react"
import { Link } from "gatsby"

import * as styles from './navbar.module.css'

const Navbar = ({ menu }) => {
  return (
    <nav>
      <ul className="flex list-none mb-0 ml-3">
        <li className="mr-6">
          /<Link to="/music" className={styles.navlink}>Music</Link>
        </li>
        <li className="mr-6">
          /<Link to="/projects" className={styles.navlink}>Projects</Link>
        </li>
        <li className="mr-6">
          /<Link to="/blog" className={styles.navlink}>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
