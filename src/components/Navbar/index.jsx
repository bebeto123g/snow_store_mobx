import React from 'react'
import { observer } from 'mobx-react'

import { Navbar } from 'react-bootstrap'

import NavbarButtonAuth from './NavbarButtonAuth'
import NavLogo from '../../styledComponents/NavLogo'

import isLogin from '../../mobx/isLogin'
import NavLinksUser from './NavLinksUser'
import NavLinksAdmin from './NavLinksAdmin'
import NavLinksManager from './NavLinksManager'

const NavbarPanel = observer(() => {
    // const submitHandlerSearch = useCallback((value) => {
    //   console.log(value)
    // }, [])

    return (
      <header>
        <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
          <NavLogo />
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>

            {!isLogin.isAdmin && !isLogin.isManager && <NavLinksUser isLogin={isLogin.isLogin} />}
            {isLogin.isAdmin && <NavLinksAdmin />}
            {isLogin.isManager && <NavLinksManager />}

            {/*<LineSearch submit={submitHandlerSearch} />*/}
            <NavbarButtonAuth isLogin={isLogin} />
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
)

export default NavbarPanel
