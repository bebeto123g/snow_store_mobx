import React, { useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { observer } from 'mobx-react'

import { Container } from 'react-bootstrap'

import Auth from './mobx/Auth'
import Cart from './mobx/Cart'
import isLogin from './mobx/isLogin'

import UserRoutes from './routes/UserRoutes'
import AdminRoutes from './routes/AdminRoutes'
import ManagerRoutes from './routes/ManagerRoutes'

import { AppContainer } from './styledComponents/AppConteiner'
import NavbarPanel from './components/Navbar/NavbarPanel'
import AlertApp from './components/AlertApp'
import ModalApp from './components/Modal'
import Footer from './components/Footer/Footer'


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
          <Switch>
            {isLogin.isAdmin && <AdminRoutes />}
            {isLogin.isManager && <ManagerRoutes />}
            {!isLogin.isManager && !isLogin.isAdmin && <UserRoutes />}
          </Switch>
        </Container>
      </AppContainer>
      {!isLogin.isManager && !isLogin.isAdmin && <Footer />}
      <ModalApp />
    </>
  )
})

export default App
