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
                name='contact-form-1'
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            // action="/confirmation"
            >
                {/* <input type="hidden" name="bot-field" /> */}
                <input type="hidden" name="contact-form-1" value="contact" />" and "<p hidden> <label htmlFor="bot-field">Don’t fill this out:{' '}<input name="bot-field" /> </label> </p>

                <label htmlFor='name' ><input name='name' placeholder="Your Name" type='text' id='name' /> </label>
                <label htmlFor='email' > <input name='email' placeholder="Your email" type='email' id='email' /></label>
                <label htmlFor='message' > <textarea className="text-area" name='message' placeholder="Your Message"
                    // type='text-area' 
                    id='message'
                    required /> </label>

                <button className="btn btn--full" type="submit">Send</button>
            </form>
        </div>
    </Layout>
)

export default ContactPage
