import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
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
            // /action="/confirmation"
            >
                <input name='name' placeholder="Your Name" type='text' />
                <input name='email' placeholder="Your email" type='email' />
                <textarea className="text-area" name='message' placeholder="Your Message" type='text-area' required />
                <button className="btn btn--full">Send</button>
            </form>
        </div>
    </Layout>
)

export default ContactPage
