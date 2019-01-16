import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
// import './layout.scss'

import './styles/App.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        // className="site-content"
        className="site-body"
      >
        <Header
          siteTitle={data.site.siteMetadata.title} />
        {/* <div
          style={{
            margin: `0 auto`,
            // maxWidth: 960,
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            min- height: `100vh`
}}
> */}

        <div
          className="site-content" >
          {children}
          {/* </div> */}
          <footer>
            {/* © {new Date().getFullYear()} */}

            {/* Built with
            {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          </footer>

        </div>





      </div>
      // </div >
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
