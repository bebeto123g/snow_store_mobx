import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import { Container } from 'react-bootstrap'
import { AppContainer } from './styles/AppConteiner'

import SwitchRoutes from './routes/SwitchRoutes'

import NavbarPanel from './components/Navbar/'
import Footer from './components/Footer/'
import ModalApp from './components/Modal/'
import AlertApp from './components/AlertApp'
import Auth from './mobx/Auth'
import Cart from './mobx/Cart'

const App = observer(() => {

  useEffect(() => {
    Auth.init()
  }, [])

  useEffect(() => {
    Cart.init()
  }, [])

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
})

export default App
