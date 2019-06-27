import PropTypes from "prop-types"
import React from "react"

function Header(props) {
  const { branding } = props
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
        <ul className="navbar-nav">
          <li class="nav-item">
            <a href="/" className="nav-link">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: "My App"
}
Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header
