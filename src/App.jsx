import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import Auth from './mobx/Auth'
import Cart from './mobx/Cart'
import isLogin from './mobx/isLogin'

import AppAdmin from './admin/AppAdmin'
import AppManager from './manager/AppManager'
import AppUser from './user/AppUser'

const App = observer(() => {

  useEffect(() => {
    Auth.init()
  }, [])

  useEffect(() => {
    Cart.init()
  }, [])

  if (isLogin.isAdmin) return <AppAdmin />
  if (isLogin.isManager) return <AppManager />

  return <AppUser />
})

export default App
