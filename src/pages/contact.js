import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const SecondPage = () => (
    <Layout>
        <SEO title="Contact Form" />
        <h1>Contact Me</h1>
        <p>Welcome to the contact page</p>
        <AniLink cover
            direction="right"
            to="/"
            // bg="#2b2c28"
            bg="#131515"
        >
            Go back to the homepage
    </AniLink>
        {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
)

export default SecondPage
