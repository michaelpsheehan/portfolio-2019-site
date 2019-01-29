import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contact';

const ContactPageNew = () => (
    <Layout>
        <SEO title="Contact Form" />
        <h1>Contact Me</h1>

        <div className="site-content" style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center'

        }}>

            <Contact />

        </div>
    </Layout >
)

export default ContactPageNew
