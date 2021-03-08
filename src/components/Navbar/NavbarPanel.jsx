import React from 'react'
import { observer } from 'mobx-react'

import { Navbar } from 'react-bootstrap'

import isLogin from '../../mobx/isLogin'
import NavLogo from '../../styledComponents/NavLogo'
import ButtonNavbarAuth from '../../UX/Button/ButtonNavbarAuth'
import NavLinksUser from './NavLinksUser'
import NavLinksManager from './NavLinksManager'
import NavLinksAdmin from './NavLinksAdmin'

const NavbarPanel = observer(() => {
    return (
      <header>
        <Navbar
          collapseOnSelect
          expand='md'
          bg={isLogin.isAdmin ? 'info' : isLogin.isManager ? 'warning' : 'dark'}
          variant='dark'>
          <NavLogo />
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>

            {
              isLogin.isAdmin && <NavLinksAdmin />
            }
            {
              isLogin.isManager && <NavLinksManager />
            }
            {
              !isLogin.isAdmin && !isLogin.isManager && <NavLinksUser isLogin={isLogin.isLogin} />
            }
            {/*<LineSearch submit={submitHandlerSearch} />*/}
            <ButtonNavbarAuth isLogin={isLogin} />
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
)

export default NavbarPanel