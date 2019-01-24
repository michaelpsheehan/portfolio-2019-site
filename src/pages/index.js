import React from 'react'
import SEO from '../components/seo'
import { Spring } from 'react-spring'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Header from '../components/header'

import Layout from '../components/layout'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`Michael Sheehan`, `Web Developer`, `Manchester`, `React`, `Gatsby`, `Wordpress`, `Javascript`,]} />
    <Header />
    <div className="hero">
      <div className="hero__text">
        <Spring from={{ transform: 'translate3d(0 ,-100%,0)', opacity: 0 }}
          to={{ transform: 'translate3d(0,0,0)', paddingBottom: '0', opacity: 1 }} >
          {props => (
            <h2 className='hero__text-h2' style={props}>
              <span className="hero__text--line-1" style={props}>I am a freelance web developer</span>
              <span className="hero__text--line-2"> and digital ninja</span>
            </h2>
          )}
        </Spring>

        <Spring from={{ transform: 'translate3d(0 ,500%,0)', opacity: 0 }} to={{ transform: 'translate3d(0,0,0)', opacity: 1 }} delay='100'>
          {props => (
            <AniLink cover direction="up" top="exit" to="contact" bg="#131515">
              <button className="btn btn--ghost" style={props}>CONTACT ME</button>
            </AniLink>

          )}
        </Spring>

        <Spring from={{ transform: 'translate3d(0 ,500%,0)', opacity: 0 }} to={{ transform: 'translate3d(0,0,0)', opacity: 1 }} delay='300'>
          {props => (
            <AniLink cover direction="left" top="exit" to="projects" bg="#131515">
              <button className="btn" style={props}>SEE MY WORK</button>
            </AniLink>
          )}
        </Spring>

      </div>
    </div>

  </>
)

export default IndexPage
