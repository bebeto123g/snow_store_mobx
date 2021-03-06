import React from 'react'

import { Container } from 'react-bootstrap'

import SwitchUserRoutes from '../routes/SwitchUserRoutes'

import { AppContainer } from '../styledComponents/AppConteiner'
import AlertApp from '../components/AlertApp'
import ModalApp from '../components/Modal'
import NavbarPanel from '../components/Navbar'
import Footer from '../components/Footer'

const AppUser = () => {
  return (
    <>
      <NavbarPanel />
      <AppContainer>
        <Container>
          <AlertApp />
          <SwitchUserRoutes />
        </Container>
      </AppContainer>
      <Footer />
      <ModalApp />
    </>
  )
}

export default AppUser