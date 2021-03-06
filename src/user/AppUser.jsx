import React from 'react'

import { Container } from 'react-bootstrap'

import SwitchRoutes from './routes/SwitchRoutes'

import { AppContainer } from './styles/AppConteiner'
import AlertApp from './components/AlertApp'
import ModalApp from './components/Modal'
import NavbarPanel from './components/Navbar'
import Footer from './components/Footer'

const AppUser = () => {
  return (
    <>
      <NavbarPanel />
      <AppContainer>
        <Container>
          <AlertApp />
          <SwitchRoutes />
        </Container>
      </AppContainer>
      <Footer />
      <ModalApp />
    </>
  )
}

export default AppUser