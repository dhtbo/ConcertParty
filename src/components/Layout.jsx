import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import MainNavbar from './Navbar/MainNavbar'
import Footer from './Footer/Footer'


const Layout = ({children, ...props}) => {
  return (
    <>
      <MainNavbar auth={props.auth}/>
        {children}
      <Footer /> 
    </>
  )
}

export default Layout
