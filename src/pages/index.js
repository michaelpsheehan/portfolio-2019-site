import React from 'react'
import SEO from '../components/seo'
import { Spring } from 'react-spring'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Header from '../components/header'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'


const IndexPage = ({ data }) => (
    <>
        <SEO title="Home" keywords={[`Michael Sheehan`, `Web Developer`, `Manchester`, `React`, `Gatsby`, `Wordpress`, `Javascript`,]} />
        <Header />
        <div className="hero">

            <Img className="project__img "
                fluid={data.image1.childImageSharp.fluid}
                style={{ position: 'relative', width: 'auto', height: '100%' }}
            />


            <div className="hero__text">
                <Spring from={{ transform: 'translate3d(0 ,-100%,0)', opacity: 0 }}
                    to={{ transform: 'translate3d(0,0,0)', paddingBottom: '0', opacity: 1, color: '#231f20' }} >
                    {props => (
                        <h2 className='hero__text-h2' style={props}>
                            <span className="hero__text--line-1" style={props}>I am a frontend web developer</span>
                            <span className="hero__text--line-2"> and digital ninja</span>
                        </h2>
                    )}
                </Spring>
                <div className="hero__buttons">

                    <Spring from={{ transform: 'translate3d(0 ,500%,0)', opacity: 0 }} to={{ transform: 'translate3d(0,0,0)', opacity: 1 }} delay='100'>
                        {props => (
                            <AniLink cover direction="up" top="exit" to="contact" bg="#1a68af">
                                <button className="btn btn--ghost" style={props}>CONTACT ME</button>
                            </AniLink>

                        )}
                    </Spring>

                    <Spring from={{ transform: 'translate3d(0 ,500%,0)', opacity: 0 }} to={{ transform: 'translate3d(0,0,0)', opacity: 1 }} delay='300'>
                        {props => (
                            <AniLink cover direction="left" top="exit" to="projects" bg="#1a68af"
                            >
                                <button className="btn" style={props}>SEE MY WORK</button>
                            </AniLink>
                        )}
                    </Spring>
                </div>

            </div>
        </div>

    </>
)

export default IndexPage


export const heroQuery = graphql`
  query {
    
 
    image1: file(relativePath: { eq: "laptop-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
 
    
 




}
`