import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { htmlIcon, cssIcon, sassIcon, jsIcon, reactIcon, reduxIcon, gatsbyIcon, wordpressIcon, gulpIcon, gitIcon } from '../../public/icons/SVG/icons'
import Icon from '../components/icon';

const WhatIUse = () => (

    <Layout>
        <SEO title="Contact Form" />
        <h1>I Develop With</h1>

        <div className="site-content--what-i-use" style={{ maxWidth: '1140px', paddingTop: '4rem' }}>

            <Icon name='HTML5' iconName={htmlIcon} delay='0' />
            <Icon name='CSS3' iconName={cssIcon} delay='50' />
            <Icon name='SASS' iconName={sassIcon} delay='100' />
            <Icon name='Javascript' iconName={jsIcon} delay='150' />
            <Icon name='React' iconName={reactIcon} delay='200' />
            <Icon name='Redux' iconName={reduxIcon} delay='250' />
            <Icon name='Gatsby' iconName={gatsbyIcon} delay='300' />
            <Icon name='Wordpress' iconName={wordpressIcon} delay='350' />
            <Icon name='Gulp' iconName={gulpIcon} delay='400' />
            <Icon name='Git' iconName={gitIcon} delay='450' />

        </div>
    </Layout >
)

export default WhatIUse
