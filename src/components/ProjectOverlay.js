import React, { Component } from 'react'
import { Spring, config } from 'react-spring'
import { Link } from 'gatsby'


class ProjectOverlay extends Component {
  render() {

    const { siteName, siteDescription, siteLink, github, githubLink } = this.props

    return (
      <>

        <Spring from={{ opacity: 0 }}
          to={{
            opacity: 1,
            // color: '#1a68af',
            height: '100%',
            width: '100%',
            // border: '1px solid blue',
            zIndex: '200',
            backgroundColor: '#5891c4',
            color: '#ffffff'


            // position: 'absolute'
          }}
        // delay='900'
        >
          {props => (
            <>


              <div className="project-overlay" style={props}>


                <Spring from={{ opacity: 0 }} to={{ opacity: 1, color: '#fff' }} delay='100'>
                  {props => (
                    <div className="project-overlay__title" style={props}>{siteName}</div>

                  )}
                </Spring>

                <div classname='project-overlay__description'
                  style={{
                    // border: '2px solid yellow',
                    fontSize: '1.9rem',
                    width: '32rem',
                    position: 'absolute',
                    top: '50%',
                    margin: '1rem',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {siteDescription}
                </div>

                <div className="project-overlay__buttons">

                  <a href={siteLink} target="_blank" rel="noopener norefferer">
                    <button className="btn btn--ghost" >Visit Site</button>
                  </a>

                  <a href={githubLink} target="_blank" rel="noopener norefferer">
                    <button className="btn btn--ghost" >View Code</button>
                  </a>

                </div>


              </div>
            </>

          )}
        </Spring>

      </>
    )
  }
}

export default ProjectOverlay


