import React, { Component } from 'react'
import { Spring } from 'react-spring'

import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'


class ProjectOverlay extends Component {
  render() {
    const { image, name, description, siteLink, githubLink, delay } = this.props

    const buttons = githubLink ? (
      <>
        <div className="project-overlay__buttons">
          <OutboundLink href={siteLink} target="_blank" rel="noopener noreferrer" >
            <button className="btn btn--ghost--white   project-overlay__button-1" >Visit Site</button>
          </OutboundLink>
          <OutboundLink href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="btn btn--ghost--white project-overlay__button-2" >View Code</button>
          </OutboundLink>
        </div>

      </>
    ) : (
        <>
          <div className="project-overlay__buttons">
            <OutboundLink href={siteLink} target="_blank" rel="noopener noreferrer">
              <button className="btn  btn--ghost--white  project-overlay__button-solo" >Visit Site</button>
            </OutboundLink>
          </div>
        </>
      )

    return (
      <>
        <Spring from={{
          marginTop: 50,
          opacity: 0
        }} to={{
          marginTop: 0,
          opacity: 1
        }} delay={delay}>

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


