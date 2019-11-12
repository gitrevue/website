import React from "react"
import { Link } from 'gatsby'
import Plan from "./plan"

const Pricing = () => (
  <>
    <div className="d-md-flex">
      <Plan
        name="Hobby"
        price="Free"
        action="Start Hobby"
        link="https://app.gitrevue.io/sign-up"
        features={[
          '50 reviews per month',
          'Unlimited team members',
          'Unlimited repositories',
        ]}
      />

      <Plan
        className="ml-md-2 mt-4 mt-md-0"
        name="Developer"
        price={12}
        action="Start Developer"
        link="https://app.gitrevue.io/sign-up"
        features={[
          'Priority reviews',
          '300 reviews per month',
          'Unlimited team members',
          'Unlimited repositories',
        ]}
      />

      <Plan
        className="ml-md-2 mt-4 mt-md-0"
        name="Team"
        price={36}
        action="Start Team"
        link="https://app.gitrevue.io/sign-up"
        features={[
          'Priority reviews',
          '1,000 reviews per month',
          'Unlimited team members',
          'Unlimited repositories',
        ]}
      />

      <Plan
        className="ml-md-2 mt-4 mt-md-0"
        name="Business"
        price={60}
        action="Start Business"
        link="https://app.gitrevue.io/sign-up"
        features={[
          'Priority reviews',
          '2,000 reviews per month',
          'Unlimited team members',
          'Unlimited repositories',
        ]}
      />
    </div>

    <div className="text-center mt-5">
      <h4>Need more?</h4>

      <Link to="/contact-us" className="btn btn-dark">Contact us</Link>
    </div>
  </>
)

export default Pricing
