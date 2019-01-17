import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const SecondPage = () => (
    <Layout>
        <SEO title="Contact Form" />
        <h1>Contact Me</h1>

        <div className="site-content" style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center'


        }}>

            <form
                name='contact'
                method='post'
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/confirmation"

            >
                <input name='name' placeholder="Your Name" type='text' />
                <input name='email' placeholder="Your email" type='email' />
                <textarea className="text-area" name='message' placeholder="Your Message" type='text-area' required />
                {/* <AniLink cover
                direction="right"
                to="confirmation"
                // bg="#2b2c28"
                bg="#131515"
            > */}
                <button class="btn btn--full">Send</button>
                {/* </AniLink> */}
            </form>




        </div>
        {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
)

export default SecondPage
