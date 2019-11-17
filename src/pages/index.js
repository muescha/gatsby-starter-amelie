import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Blogs from "../components/blogs"

const IndexPage = ({ data }) => {
  // const { frontmatter, excerpt } = data.about.edges[0].node;
  
  return(
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Blogs data={data.blog}/>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage;


export const query = graphql`
{
  blog: allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC} 
    filter: { fileAbsolutePath: { regex: "/blogs/"}}
    ) {
    edges {
      node {
        fields {
          slug
        }
        id
        frontmatter {
          title
          date
          read
        }
        excerpt
      }
    }
  }
}
`