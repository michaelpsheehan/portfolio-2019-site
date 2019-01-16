import React from 'react'
import { Link } from 'gatsby'

import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Spring from 'react-spring'


const Projects = (props) => (
    // console.log(props);
    <Layout>
        <SEO title="Page two" />
        {/* <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}> */}
        <h1>Projects</h1>
        {/* <p>Welcome to page 2</p> */}

        <div className="projects-grid" >
            <div className='project-container' >
                {/* img-1 <Img fixed={data.file.childImageSharp.fixed} /> */}
                <Img className="project__img" fluid={props.data.image1.childImageSharp.fluid} />
            </div>
            <div className='project-container' >
                <Img className="project__img" fluid={props.data.image2.childImageSharp.fluid} />
            </div>
        </div>










        <AniLink cover
            direction="right"
            to="/"
            // bg="#2b2c28"
            bg="#131515"
        >
            Go back to the homepage
    </AniLink>
        {/* <Link to="/">Go back to the homepage</Link> */}



        {/* </Spring> */}

    </Layout>
)

export default Projects

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "src/images/martalynx1080.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `


export const projectsQuery = graphql`
  query {
    image1: file(relativePath: { eq: "gigfindr-1080-hulk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    image2: file(relativePath: { eq: "martalynx1080.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }




  }
`