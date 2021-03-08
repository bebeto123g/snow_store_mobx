import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { adminRoutes } from './routes'

const AdminRoutes = () => {
  return (
    <>
      {adminRoutes.map((route) => <Route {...route} key={route.path} />
      )}
      <Redirect to={'/admin'} />
    </>
  )
}


export default AdminRoutes