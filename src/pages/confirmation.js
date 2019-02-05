import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const SecondPage = () => (
    <Layout>
        <SEO title="Contact Form confirmation" />
        <div className="site-content" >
            <div className='confirmation-page'>
                <p>Thank You for Your Message</p>
            </div>
        </div>

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
