import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const SecondPage = () => (
    <Layout>
        <SEO title="Contact Form confirmation" />
        <h1>Thank You for Your Message</h1>

        <AniLink cover
            direction="right"
            to="/"
            bg="#131515"
        >
            Go back to the homepage
    </AniLink>
    </Layout>
)

export default SecondPage
