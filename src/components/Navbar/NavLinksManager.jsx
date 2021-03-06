import React from 'react'
import { Nav } from 'react-bootstrap'
import { navLinksManager } from './navLinksTypes'
import ButtonNavLink from '../../UX/Button/ButtonNavLink'

const NavLinksManager = () => {
  return (
    <Nav className='mr-auto'>
      {navLinksManager.map(({ to, exact, text }) => {
        return (
          <ButtonNavLink to={to} exact={exact} key={text + to}>
            {text}
          </ButtonNavLink>
        )
      })}
    </Nav>
  )
}

export default NavLinksManager