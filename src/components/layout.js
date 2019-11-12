import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, MainComponent }) => (
  <>
    <Header />
    <MainComponent>{children}</MainComponent>
    <Footer />
  </>
)

Layout.defaultProps = {
  MainComponent: 'main',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  MainComponent: PropTypes.elementType,
}

export default Layout
