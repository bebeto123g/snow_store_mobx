import React from 'react'
import { Nav } from 'react-bootstrap'
import { navLinksAdmin } from './navLinksTypes'
import ButtonNavLink from '../../UX/Button/ButtonNavLink'

const NavLinksAdmin = () => {
  return (
    <Nav className='mr-auto'>
      {navLinksAdmin.map(({ to, exact, text }) => {
        return (
          <ButtonNavLink to={to} exact={exact} key={text + to}>
            {text}
          </ButtonNavLink>
        )
      })}
    </Nav>
  )
}

export default NavLinksAdmin