import React, { Component } from 'react'
import { Link } from 'gatsby'

import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Spring, config } from 'react-spring'

// const ProjectsWrapper = (props) => {
//   return (
//     <div style={props} >YOYOYOYOYOYOYOYO</div>
//   );
// }




class Projects2 extends Component {
  render() {



    return (
      // console.log(props);
      <Layout>
        <SEO title="Page two" />
        {/* <Spring from={{ opacity: 0, marginTop: 5000 }} to={{ opacity: 1, marginTop: 0 }}>
          {props => (
            // <ProjectsWrapper style={props} />
            <div style={props} > </div>
 )}

        </Spring> */}
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay='500'>
          {props => (

            <h1 style={props}>Projects</h1>
          )}
        </Spring>

        <div className="projects-grid" >
          <Spring from={{ marginTop: 500, opacity: 0 }} to={{ marginTop: 0, opacity: 1 }} delay='300'>
            {props => (
              <div className='project-container' style={props} >
                <Img className="project__img" fluid={this.props.data.image1.childImageSharp.fluid} />
              </div>
            )}
          </Spring>

          <Spring from={{ marginTop: 500, opacity: 0 }} to={{ marginTop: 0, opacity: 1 }} delay='500'>
            {props => (
              <div className='project-container' style={props} >
                <Img className="project__img" fluid={this.props.data.image2.childImageSharp.fluid} />
              </div>
            )}
          </Spring>
        </div>








        

        <AniLink cover
          direction="right"
          to="/"
          // bg="#2b2c28"
          bg="#131515"
        >
          Go back to the homepage
      </AniLink>




      </Layout>
    )
  }
}

export default Projects2

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