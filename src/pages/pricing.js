import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pricing from '../components/pricing'

const PricingPage = () => (
  <Layout>
    <SEO
      title="Pricing"
      description="GitRevue pricing plans. Get started today for free, upgrade as you need."
    />

    <div className="container mt-5">
      <h1 className="text-center">Pricing</h1>

      <h6 className="text-center mb-5">Get started today for free, upgrade as you need.</h6>

      <Pricing />
    </div>
  </Layout>
)

export default PricingPage
