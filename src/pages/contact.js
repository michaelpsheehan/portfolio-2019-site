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
                name="contact-form-1"
                method="post"
                data-netlify="true"
            // data-netlify-honeypot="bot-field"
            // netlify-honeypot="bot-field"
            // action="/confirmation"
            >
                {/* <p class="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p> */}

                <label htmlFor='name' >
                    <input
                        name='name'
                        // placeholder="Your Name"
                        type='text'
                        id='name'
                    />
                </label>
                <label htmlFor='email' >
                    <input
                        name='email'
                        // placeholder="Your email"
                        type='email'
                        id='email'
                    />
                </label>
                <label htmlFor='message' >
                    <textarea
                        className="text-area"
                        name='message'
                        // placeholder="Your Message"
                        id='message'
                    // required
                    />
                </label>

                <button className="btn btn--full" type="submit">Send</button>
            </form>

        </div>
    </Layout>
)

export default ContactPage
