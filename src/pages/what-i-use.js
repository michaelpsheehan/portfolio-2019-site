import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import {
    htmlIcon, cssIcon,
    sassIcon,
    jsIcon, reactIcon, reduxIcon, gatsbyIcon, wordpressIcon, gulpIcon, gitIcon,
    phpIcon
} from '../../public/icons/SVG/icons'

// import { sassIcon } from '../../public/icons/SVG/sass-icon'


import Icon from '../components/icon';

const WhatIUse = () => (
    <Layout>
        <SEO title="Contact Form" />
        <h1>I Develop With</h1>

        <div className="site-content--what-i-use" style={{
            // textAlign: 'center',
            // display: 'flex',
            // alignItems: 'start',
            // justifyContent: 'center',
            // minHeight: '100%',
            maxWidth: '1140px',
            border: '2px solid green'



        }}>

            <Icon name='HTML5' iconName={htmlIcon} />
            <Icon name='CSS3' iconName={cssIcon} />
            <Icon name='SASS' iconName={sassIcon} />
            <Icon name='Javascript' iconName={jsIcon} />
            <Icon name='React' iconName={reactIcon} />
            <Icon name='Redux' iconName={reduxIcon} />
            <Icon name='Gatsby' iconName={gatsbyIcon} />
            <Icon name='Wordpress' iconName={wordpressIcon} />
            <Icon name='Gulp' iconName={gulpIcon} />
            <Icon name='Git' iconName={gitIcon} />



            {/* 
            <div className="tools-icon" ><span className="tools-icon__text">HTML5</span>{htmlIcon}</div>
            <div className="tools-icon" ><span className="tools-icon__text">HTML5</span>{htmlIcon}</div>
            <div className="tools-icon" ><span className="tools-icon__text">HTML5</span>{htmlIcon}</div>
            <div className="tools-icon" ><span className="tools-icon__text">HTML5</span>{htmlIcon}</div>
            <div className="tools-icon" ><span className="tools-icon__text">HTML5</span>{htmlIcon}</div>
            <div className="tools-icon" ><span className="tools-icon__text">HTML5</span>{htmlIcon}</div>
            <div className="tools-icon" ><span className="tools-icon__text">HTML5</span>{htmlIcon}</div>
            <div className="tools-icon" ><span className="tools-icon__text">HTML5</span>{htmlIcon}</div>
            <div className="tools-icon" ><span className="tools-icon__text">HTML5</span>{htmlIcon}</div>
            <div className="tools-icon" ><span className="tools-icon__text">HTML5</span>{htmlIcon}</div> */}





        </div>
        {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout >
)

export default WhatIUse
