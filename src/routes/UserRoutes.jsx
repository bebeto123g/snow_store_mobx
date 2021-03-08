import React from 'react'
import { observer } from 'mobx-react'
import { Route, Redirect } from 'react-router-dom'

import { userRoutes } from './routes'
import isLogin from '../mobx/isLogin'

const UserRoutes = observer(() => {
    return (
      <>
        {userRoutes.map((route) => {
          if (!isLogin.isLogin && route.isAuth) {
            return
          }
          return <Route {...route} key={route.path} />
        })}
        <Redirect to={'/'} />
      </>
    )
  }
)

export default UserRoutes
