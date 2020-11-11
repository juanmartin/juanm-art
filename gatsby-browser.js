// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"

import React from 'react';
import { MDXEmbedProvider } from 'mdx-embed';

export const wrapRootElement = ({ element }) => {
  return <MDXEmbedProvider>{element}</MDXEmbedProvider>;
};