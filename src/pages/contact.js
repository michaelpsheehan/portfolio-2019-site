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
                method="POST" data-netlify="true"
                data-netlify-honeypot="bot-field"
            // /action="/confirmation"
            >
                <label>name: <input name='name' placeholder="Your Name" type='text' /> </label>
                <label>email: <input name='email' placeholder="Your email" type='email' /></label>
                <label>Message:  <textarea className="text-area" name='message' placeholder="Your Message" type='text-area' required /> </label>
                <button className="btn btn--full" type="submit">Send</button>
            </form>
        </div>
    </Layout>
)

export default ContactPage
