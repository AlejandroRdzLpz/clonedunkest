import React, { createContext, useState, useEffect } from 'react'
import decode from 'jwt-decode'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [ isAuth, setIsAuth ] = useState(false)
  const [ user, setUser ] = useState({})

  const logIn = (token) => {
    localStorage.setItem('clonedunkest-token', token)
    const decoded = decode(token)
    setUser(decoded)
    setIsAuth(true)
  }

  const logOut = () => {
    localStorage.removeItem('clonedunkest-token')
    setUser({})
    setIsAuth(false)
  }

  useEffect(() => {
    const token = localStorage.getItem('clonedunkest-token')
    if (token) logIn(token);
  }, [])

  return <AuthContext.Provider
    value={{
      isAuth,
      user,
      logIn,
      logOut
    }}
  >
    { props.children }
  </AuthContext.Provider>
}