import React from 'react'
import { observer } from 'mobx-react'

import { Nav } from 'react-bootstrap'

import LinkNavPanel from '../../UX/LinkNavPanel'
import { navLinksTypes } from './navLinksTypes'
import isLogin from '../../mobx/isLogin'

const NavLinks = observer(() => {
    return (
      <Nav className='mr-auto'>
        {navLinksTypes.map(({ to, exact, text, isAuth }) => {
          if (!isLogin.isLogin && isAuth) return

          return (
            <LinkNavPanel to={to} exact={exact} key={text + to}>
              {text}
            </LinkNavPanel>
          )
        })}
      </Nav>
    )
  }
)

export default NavLinks
