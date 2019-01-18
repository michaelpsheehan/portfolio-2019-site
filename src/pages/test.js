import React, { Component } from 'react'
import { Link } from 'gatsby'

import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Spring, Transition, config, animated } from 'react-spring'
import ProjectOverlay from '../components/ProjectOverlay';

import { htmlIcon, cssIcon, phpIcon } from '../../public/icons/SVG/icons'
import image2 from '../images/martalynx1080.jpg'

// const ProjectsWrapper = (props) => {
//   return (
//     <div style={props} >YOYOYOYOYOYOYOYO</div>
//   );
// }




class Projects2 extends Component {


    state = {
        toggle: false
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }




    render() {
        const { toggle } = this.state;

        const img1 = toggle ? (<></>) : (<Img className="project__img" fluid={this.props.data.image1.childImageSharp.fluid} style={{ width: '100%' }} />);

        // const htmlIcon = <svg xmlns="http://www.w3.org/2000/svg" width="115.05" height="130.474" viewBox="0 0 115.05 130.474"><path d="M1.892,0,12.358,117.43l46.987,13.043,47.109-13.064L116.942,0H1.9ZM97.481,109.936,59.61,120.431v.061l-.1-.029-.1.029v-.061l-37.87-10.495L12.595,9.6h93.839l-8.95,100.338ZM77.094,67.557,75.43,86.231,59.349,90.573,43.313,86.251l-1.027-11.5H27.824L29.842,97.37l29.569,8.179L88.886,97.37l3.955-44.214H40.349L39.036,38.408H94.149l1.288-14.4H23.294l3.886,43.55Z" transform="translate(-1.892)" fill="#dd4b25" /></svg>



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

                            <div className='project-container' style={props} onMouseEnter={() => this.setState({ toggle: !toggle })}
                            // onMouseLeave={() => this.setState({ toggle: !toggle })}
                            >

                                {/* <Img className="project__img" fluid={this.props.data.image1.childImageSharp.fluid} style={{ border: '4px solid green', backgroundColor: '#1a68af' }} /> */}
                                {/* {img1} */}

                                {/* <Transition 
                from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
                enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
                leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
               >  */}
                                {/* {img1} */}

                                {/* </Transition> */}


                                {/* {toggle && */}


                                {/* } */}
                                {/* <ProjectOverlay /> */}
                            </div>


                        )}
                    </Spring>



                    {/* <Spring from={{ marginTop: 500, opacity: 0 }} to={{ marginTop: 0, opacity: 1 }} delay='500'>
                        {props => ( */}

                    <div className='project-container'
                        // style={props}
                        onMouseEnter={this.toggle}
                        onMouseLeave={this.toggle}

                    >




                        <Img
                            className="project__img-test "
                            fluid={this.props.data.image2.childImageSharp.fluid}

                        />

                        {/* {toggle && */}
                        <Transition
                            native
                            items={this.state.toggle}
                            from={{
                                // position: 'fixed',
                                opacity: 0.5,
                                paddingTop: 100,
                                top: 100
                            }}
                            enter={{
                                opacity: 1,
                                paddingTop: 0,
                                backgroundColor: '#5891c4',
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '100%',

                            }}
                            leave={{
                                opacity: 0,
                                paddingTop: 100,
                                top: 100
                            }}
                            // delay={1000}
                            config={{ duration: 70 }}
                        >
                            {toggle => toggle && (props => (

                                <animated.div className='overlay-test3' style={props} >


                                    {/* <div className="overlay-test"> */}
                                    <div className="testy">
                                        YOYOYOYOYOYOYOYO
                                    </div>
                                    <div className="project-overlay__buttons">

                                        <a href='' target="_blank" rel="noopener norefferer">
                                            <button className="btn btn--ghost" >Visit Site</button>
                                        </a>

                                        <a href='' target="_blank" rel="noopener norefferer">
                                            <button className="btn btn--ghost" >View Code</button>
                                        </a>

                                    </div>

                                    <button className="btn btn--ghost">test</button>

                                </animated.div>
                            ))}
                        </Transition>
                        {/* } */}
                    </div>

                    {/* 

                    //     )}
                    // </Spring> */}






                    {/* 
                    <Spring from={{ marginTop: 500, opacity: 0 }} to={{ marginTop: 0, opacity: 1 }} delay='500'>
                        {props => (
                            <div className='project-container' style={props} >




                                <Img className="project__img " fluid={this.props.data.image2.childImageSharp.fluid} />
                                <div className="overlay-test">

                                </div>
                            </div>
                        )}
                    </Spring> */}




                    {/* --------  Test with regular css hover ----------- */}

                    {/* <div className="container-test">
                        <img className='img-test' src={image2} />

                        <div className="overlay-test">
                            test tings
                        </div>
                    </div> */}








                </div>










                <AniLink cover
                    direction="right"
                    to="/"
                    // bg="#2b2c28"
                    bg="#131515"
                >
                    Go back to the homepage
      </AniLink>
                {/* 
        {htmlIcon}
        {cssIcon}
        {phpIcon} */}




            </Layout>
        )
    }
}

export default Projects2



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