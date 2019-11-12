import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

const Documentation = ({ children }) => (
  <>
    <Header />

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>

        <div className="col-md-10">
          <main>{children}</main>
        </div>
      </div>
    </div>

    <Footer />
  </>
)

Documentation.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Documentation
