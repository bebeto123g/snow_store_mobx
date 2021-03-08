import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { managerRoutes } from './routes'

const ManagerRoutes = () => {
  return (
    <>
      {managerRoutes.map((route) => <Route {...route} key={route.path} />
      )}
      <Redirect to={'/manager'} />
    </>
  )
}

export default ManagerRoutes