import React from "react"
import PropTypes from "prop-types"
import MainMenu from "components/menus/MainMenu"
import GlobalStyles from "./GlobalStyles"
import LayoutWrapper from "./LayoutWrapper"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <MainMenu />
      <LayoutWrapper>{children}</LayoutWrapper>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
