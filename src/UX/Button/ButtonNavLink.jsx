import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const ButtonNavLink = ({ to, children, classNames = '', exact = false }) => {
  return (
    <NavLink to={to} className={`${classNames} nav-link`} exact={exact}>
      {children}
    </NavLink>
  )
}

ButtonNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  className: PropTypes.string,
}

export default ButtonNavLink
