import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
import ButtonNavLink from '../../UX/Button/ButtonNavLink'
import { navLinksUser } from './navLinksTypes'

const NavLinksUser = ({ isLogin }) => {
  return (
    <Nav className='mr-auto'>
      {navLinksUser.map(({ to, exact, text, isAuth }) => {
        if (!isLogin && isAuth) return

        return (
          <ButtonNavLink to={to} exact={exact} key={text + to}>
            {text}
          </ButtonNavLink>
        )
      })}
    </Nav>
  )
}

NavLinksUser.propTypes = {
  isLogin: PropTypes.bool.isRequired
}

export default NavLinksUser