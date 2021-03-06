import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { managerRoutes } from './routes'

const SwitchManagerRoutes = () => {
  return (
    <Switch>
      {managerRoutes.map((route) => <Route {...route} key={route.path} />
      )}
      <Redirect to={'/manager'} />
    </Switch>
  )
}

export default SwitchManagerRoutes