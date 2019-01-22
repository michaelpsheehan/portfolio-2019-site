import React, { Component } from 'react'
import { Link } from 'gatsby'

import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Spring, Transition, config, animated } from 'react-spring'
// import ProjectOverlay from '../components/ProjectOverlay----old';

import image2 from '../images/martalynx1080.jpg'
import OverlayTest from '../components/overlay_test';
import ProjectOverlay from '../components/ProjectOverlay';



class Projects extends Component {


    state = {
        toggle: false,
        project1: {
            name: 'Gig Findr',
            description: ' Full Stack Javascript CRUD Portfolio App using React, Redux, Firebase and Firestore.',
            siteLink: 'https://task-e5ee4.firebaseapp.com/',
            githubLink: 'https://github.com/michaelpsheehan/gig-findr',
        },
        project2: {
            name: 'Marta Lynx',
            description: ' Bespoke Wordpress theme developed. Uses Custom Post Types, Advanced Custom Fields and custom PHP.',
            siteLink: 'https://www.martalynx.com/',


        }
    }


    render() {

        const img1 = this.props.data.image1.childImageSharp.fluid;
        const img2 = this.props.data.image2.childImageSharp.fluid;
        const { project1, project2 } = this.state;


        return (
            <Layout>
                <SEO title="Page two" />

                < Spring
                    from={
                        { opacity: 0 }}
                    to={{ opacity: 1 }}
                    delay='500'
                >
                    {props => (
                        <>
                            <h1 style={props}>Projects</h1>
                            <hr></hr>
                        </>
                    )}
                </Spring >

                <div className="projects-grid" >

                    <ProjectOverlay
                        image={img1}
                        name={project1.name}
                        description={project1.description}
                        siteLink={project1.siteLink}
                        githubLink={project1.githubLink}
                        delay='0'
                    />

                    <ProjectOverlay
                        image={img2}
                        name={project2.name}
                        description={project2.description}
                        siteLink={project2.siteLink}
                        delay='500'
                    />

                </div>
                <AniLink cover direction="right" to="/" bg="#131515">Go back to the homepage </AniLink>
            </Layout >
        )
    }
}


export default Projects



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