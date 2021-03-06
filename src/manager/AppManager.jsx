import React from 'react'
import NavbarPanel from '../components/Navbar'
import { AppContainer } from '../styledComponents/AppConteiner'
import { Container } from 'react-bootstrap'
import AlertApp from '../components/AlertApp'
import ModalApp from '../components/Modal'
import SwitchManagerRoutes from '../routes/SwitchManagerRoutes'

const AppManager = () => {
  return (
    <>
      <NavbarPanel />
      <AppContainer>
        <Container>
          <AlertApp />
          <SwitchManagerRoutes />
        </Container>
      </AppContainer>
      <ModalApp />
    </>
  )
}

export default AppManager