import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pricing from '../components/pricing'

const PricingPage = () => (
  <Layout>
    <SEO
      title="Pricing"
      description="GitRevue pricing plans. Get started with small tier today, upgrade as you need."
      path="/pricing"
    />

    <div className="container mt-5">
      <h1 className="text-center">Pricing</h1>

      <h6 className="text-center mb-5">Get started with small tier today, upgrade as you need.</h6>

      <Pricing />
    </div>
  </Layout>
)

export default PricingPage
