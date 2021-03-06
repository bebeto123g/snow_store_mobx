import React from 'react'
import { observer } from 'mobx-react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { userRoutes } from './routes'
import isLogin from '../mobx/isLogin'

const SwitchRoutes = observer(() => {
    return (
      <Switch>
        {userRoutes.map((route) => {
          if (!isLogin.isLogin && route.isAuth) {
            return
          }
          return <Route {...route} key={route.path} />
        })}
        <Redirect to={'/'} />
      </Switch>
    )
  }
)

export default SwitchRoutes
