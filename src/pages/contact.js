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
                name='contact-form'
                method="POST" data-netlify="true"
                data-netlify-honeypot="bot-field"
            // /action="/confirmation"
            >
                <label htmlFor='name' ><input name='name' placeholder="Your Name" type='text' /> </label>
                <label htmlFor='email' > <input name='email' placeholder="Your email" type='email' /></label>
                <label htmlFor='message' > <textarea className="text-area" name='message' placeholder="Your Message" type='text-area' required /> </label>

                <input type="hidden" name="bot-field" />
                <button className="btn btn--full" type="submit">Send</button>
            </form>
        </div>
    </Layout>
)

export default ContactPage
