import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { isAuthenticated } from 'util/auth'

type Props = RouteProps & {
  children: React.ReactNode 
}

const PrivateRoute = ({ children, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : (
          <>{children}</>
        )
      }
    />
  )
}

export default PrivateRoute
