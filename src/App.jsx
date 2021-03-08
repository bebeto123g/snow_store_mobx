import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import Auth from './mobx/Auth'
import Cart from './mobx/Cart'
import isLogin from './mobx/isLogin'

import { AppContainer } from './styledComponents/AppConteiner'
import { Container } from 'react-bootstrap'
import AlertApp from './components/AlertApp'
import SwitchUserRoutes from './routes/SwitchUserRoutes'
import Footer from './user/components/Footer'
import ModalApp from './components/Modal'
import SwitchAdminRoutes from './routes/SwitchAdminRoutes'
import SwitchManagerRoutes from './routes/SwitchManagerRoutes'
import NavbarPanel from './components/Navbar/NavbarPanel'

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
          {isLogin.isAdmin && <SwitchAdminRoutes />}
          {isLogin.isManager && <SwitchManagerRoutes />}
          {!isLogin.isManager && !isLogin.isAdmin && <SwitchUserRoutes />}
        </Container>
      </AppContainer>
      {!isLogin.isManager && !isLogin.isAdmin && <Footer />}
      <ModalApp />
    </>
  )
})

export default App
