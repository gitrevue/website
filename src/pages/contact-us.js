import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"

import contactImage from '../images/contact-us.svg'

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact Us"
      description="We always want to hear from you. Let us know how we can help and we'll do our best"
      path="/contact-us"
    />

    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-12">
          <h3 className="text-center mt-5">Let us hear from you!</h3>

          <p className="text-center mb-5">We always want to hear from you. Let us know how we can help and we'll do our best</p>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-md-6 d-flex justify-content-center align-content-center">
          <img src={contactImage} alt="Contact Us" className="img-fluid" />
        </div>

        <div className="col-xs-12 col-md-6">
          <ContactForm />
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
