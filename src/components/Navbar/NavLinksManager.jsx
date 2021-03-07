import React from 'react'
import ButtonNavLink from '../../UX/Button/ButtonNavLink'
import { Nav } from 'react-bootstrap'
import { navLinksManager } from './navLinksTypes'

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