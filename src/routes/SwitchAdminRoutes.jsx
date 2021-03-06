import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { adminRoutes } from './routes'

const SwitchAdminRoutes = () => {
  return (
    <Switch>
      {adminRoutes.map((route) => <Route {...route} key={route.path} />
      )}
      <Redirect to={'/admin'} />
    </Switch>
  )
}


export default SwitchAdminRoutes