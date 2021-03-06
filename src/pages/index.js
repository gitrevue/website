import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxes, faComments, faLock } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faBitbucket } from '@fortawesome/free-brands-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pricing from '../components/pricing'

import acceptRequest from '../images/accept-request.svg'
import commentAvalanche from '../images/comment-avalanche.svg'
import githubArtifactComment from '../images/github-artifact-comment.svg'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Monitor your artifacts, simplify your code reviews, automate common tasks and implement standard review flows throughout your team"
      path="/"
      meta={[
        {
          name: `keywords`,
          content: `gitrevue, artifacts, review`,
        },
      ]}
      structuredData={{
        "@context": `https://schema.org`,
        "@type": `Organization`,
        "name": "GitRevue",
        "description": `Monitor your artifacts, simplify your code reviews, automate common tasks and implement standard review flows throughout your team`,
        "sameAs": [
          "https://twitter.com/GitRevue",
          "https://www.facebook.com/GitRevue",
          "https://github.com/GitRevue",
          "https://www.linkedin.com/company/gitrevue"
        ],
      }}
    />

    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center mb-5 mb-md-0">
            <h1 className="text-center text-md-left">Automated code review</h1>
            <p className="text-center text-md-left text-muted">
              Speed up your review process by automating common tasks before your human reviews
            </p>

            <div className="d-flex flex-column flex-md-row">
              <Link to="/docs/getting-started" className="btn btn-primary btn-lg">Get Started</Link>
              <Link to="/docs" className="btn btn-light btn-lg mt-3 mt-md-0 ml-md-3">Documentation</Link>
            </div>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <img src={acceptRequest} alt="Checklist" />
          </div>
        </div>
      </div>
    </section>

    <section className="section skewed skew-left bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3><FontAwesomeIcon icon={faBoxes} className="text-dark" /> Consistency is key</h3>

            <p>
              Apply the same rules to all reviews, no biases or exemptions.
              Everyone is equal with automated reviews.
            </p>
          </div>

          <div className="col-md-4">
            <h3><FontAwesomeIcon icon={faLock} className="text-dark" /> Secure by default</h3>

            <p>
              GitRevue never clones your repository or keeps a copy of your code on disk.
            </p>
          </div>

          <div className="col-md-4">
            <h3><FontAwesomeIcon icon={faComments} className="text-dark mt-5 mt-md-0" /> Actionable feedback</h3>

            <p>Fix issues quickly with clear actionable feedback and get back to focusing on what matters</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center">
            <img src={githubArtifactComment} alt="GitRevue commenting on a pull request" />
          </div>

          <div className="col-md-6 order-1 order-md-2 d-flex flex-column justify-content-center mb-5 mb-md-0">
            <h2 className="text-center text-md-left mt-5 mt-md-0">Monitor your artifacts</h2>
            <p>GitRevue can monitor your artifacts and their growth across pull requests. Allowing you to easily see how your application is growing and prevent bloat before it affects your users</p>
          </div>
        </div>
      </div>
    </section>

    {/*<section className="section skewed skew-right bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3><FontAwesomeIcon icon={faLock} className="text-dark" /> Secure by default</h3>

            <p>
              GitRevue never clones your repository or keeps a copy of your code on disk.
            </p>
          </div>

          <div className="col-md-4">
            <h3><FontAwesomeIcon icon={faBalanceScaleLeft} className="text-dark mt-5 mt-md-0" /> Granular control</h3>

            <p>
              Don't over encumber your team when applying new review processes.
              We give you granular control so you can incrementally add rules
              as your team acclimatises to them.
            </p>
          </div>
        </div>
      </div>
    </section>*/}

    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center mb-5 mb-md-0">
            <h2 className="text-center text-md-left mt-5 mt-md-0">Drive positive reviews</h2>
            <p>Comment avalanches are often daunting and come off as nitpicking. GitRevue allows your developers to identify issues early, avoiding an ensuing avalanche</p>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <img src={commentAvalanche} alt="Comment avalanche" />
          </div>
        </div>
      </div>
    </section>

    <section className="section skewed skew-left bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center mb-5 mb-md-0">
            <h2 className="text-center text-md-left">Seamlessly integrates with your existing pipeline</h2>

            <small className="text-dark text-center text-md-left">Bitbucket and GitLab coming soon</small>
          </div>

          <div className="col-md-6 d-flex flex-wrap justify-content-center">
            <FontAwesomeIcon icon={faGithub} size="4x" className="git-icon" />
            <FontAwesomeIcon icon={faBitbucket} size="4x" className="git-icon mt-5" />
            <FontAwesomeIcon icon={faGitlab} size="4x" className="git-icon mt-5" />
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center mb-5">Pricing</h2>

            <Pricing />
          </div>
        </div>
      </div>
    </section>

    <section className="section skewed skew-right overlap bg-primary pt-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <h2 className="text-white">Start monitoring your artifacts today</h2>

            <Link to="/docs/getting-started" className="btn btn-lg btn-light mt-4">Get Started</Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
