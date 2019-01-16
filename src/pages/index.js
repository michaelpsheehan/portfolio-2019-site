import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import TransitionLink from 'gatsby-plugin-transition-link'

import { Spring, config } from 'react-spring'

import AniLink from "gatsby-plugin-transition-link/AniLink";

const IndexPage = () => (
  <>
 
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="hero">

      <div className="hero__text">
      <Spring from={{
                transform: 'translate3d(0 ,-100%,0)',
                               opacity: 0 }} to={{ 
                 transform: 'translate3d(0,0,0)', 
                paddingBottom: '0',
                 opacity: 1 }} >
          {props => (

            <h2 className='hero__text-h2' 
            style={props}
            >
            
              <span className="hero__text--line-1" style={props}>I am a freelance web developer</span>
        
          
              <span className="hero__text--line-2"> and digital ninja</span>
            </h2>

                 )}
                             </Spring>
      




        <Spring from={{ transform: 'translate3d(0 ,500%,0)', opacity: 0 }} to={{ transform: 'translate3d(0,0,0)', opacity: 1 }} delay='100'>
          {props => (
            <AniLink cover direction="up" top="exit" to="page-2" bg="#131515">
              {/* Go to Page 4 */}
              <button className="btn btn--ghost" style={props}>CONTACT ME</button>
            </AniLink>

          )}
        </Spring>

        {/* <AniLink swipe direction="left" to="page-2"> */}
        {/* <AniLink swipe direction="left" to="page-2"> */}

        <Spring from={{ transform: 'translate3d(0 ,500%,0)', opacity: 0 }} to={{ transform: 'translate3d(0,0,0)', opacity: 1 }} delay='300'>
          {props => (

            <AniLink cover direction="left" top="exit" to="projects-2" bg="#131515">
              <button className="btn" style={props}>SEE MY WORK</button>
            </AniLink>
          )}
        </Spring>
      </div>



      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      {/* </div>
    <Link to="/page-2/">Go to page 2</Link> */}



    </div>
    {/* </Layout> */}
  </>
)

export default IndexPage
