import React from 'react'
import { observer } from 'mobx-react'

import { Nav } from 'react-bootstrap'

import ButtonNavLink from '../../UX/Button/ButtonNavLink'
import { navLinksTypes } from './navLinksTypes'
import isLogin from '../../mobx/isLogin'

const NavLinksUser = observer(() => {
    return (
      <Nav className='mr-auto'>
        {navLinksTypes.map(({ to, exact, text, isAuth }) => {
          if (!isLogin.isLogin && isAuth) return

          return (
            <ButtonNavLink to={to} exact={exact} key={text + to}>
              {text}
            </ButtonNavLink>
          )
        })}
      </Nav>
    )
  }
)

export default NavLinksUser
