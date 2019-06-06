import PropTypes from "prop-types"
import React from "react"

function Header(props) {
  const { branding } = props
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  )
}

Header.defaultProps = {
  branding: "My App"
}
Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header
