import React from "react"
import Plan from "./plan"

const Pricing = () => (
  <>
    <div className="d-md-flex">
      <Plan
        className="ml-md-2 mt-4 mt-md-0"
        name="Small"
        price={5}
        action="Start Small"
        link="https://app.gitrevue.io/sign-up"
        repositories={1}
        teamMembers="Unlimited"
      />

      <Plan
        className="ml-md-2 mt-4 mt-md-0"
        name="Team"
        price={30}
        action="Start Team"
        link="https://app.gitrevue.io/sign-up"
        repositories={10}
        teamMembers="Unlimited"
      />

      <Plan
        className="ml-md-2 mt-4 mt-md-0"
        name="Business"
        price={100}
        action="Start Enterprise"
        link="https://app.gitrevue.io/sign-up"
        repositories="Unlimited"
        teamMembers="Unlimited"
      />
    </div>
  </>
)

export default Pricing
