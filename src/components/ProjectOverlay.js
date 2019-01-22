import React, { Component } from 'react'
import { Spring, config } from 'react-spring'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


class ProjectOverlay extends Component {
  render() {
    const { image, name, description, siteLink, github, githubLink, delay } = this.props

    const buttons = githubLink ? (
      <>
        <div className="project-overlay__buttons">
          <a href={siteLink} target="_blank" rel="noopener norefferer">
            <button className="btn btn--ghost  project-overlay__button-1" >Visit Site</button>
          </a>
          <a href={githubLink} target="_blank" rel="noopener norefferer">
            <button className="btn btn--ghost project-overlay__button-2" >View Code</button>
          </a>
        </div>

      </>
    ) : (
        <>
          <div className="project-overlay__buttons">
            <a href={siteLink} target="_blank" rel="noopener norefferer">
              <button className="btn btn--ghost  project-overlay__button-solo" >Visit Site</button>
            </a>
          </div>
        </>
      )





    return (
      <>
        <Spring from={{ marginTop: 500, opacity: 0 }} to={{ marginTop: 0, opacity: 1 }} delay={delay}>

          {props => (
            <div className='project-container' style={props} >
              <Img className="project__img "
                fluid={image}
                style={{ position: 'relative', width: '100%', height: 'auto' }}
              />

              <div className="project-overlay">
                <div className="project-overlay__title" >{name}</div>
                <div className='project-overlay__description'>{description}</div>
                {buttons}
              </div>
            </div>
          )}
        </Spring>
      </>
    )
  }
}

export default ProjectOverlay


