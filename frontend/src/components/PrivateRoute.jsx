import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {
  Route,
  Redirect
} from 'react-router-dom'

export const PrivateRoute = ({ component, ...RouteProps }) => {
  const { isAuth } = useContext(AuthContext)

  return (
    <Route
      {...RouteProps}
      render = {
        (props) => {
          const Component = component
          return isAuth
            ? <Component {...props}/>
            : <Redirect to="/login"/>
        }
      }
    />
  )
}

