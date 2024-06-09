import React from 'react'
import Header from './header/Index'
import Footer from './footer/Index'
import { Outlet } from 'react-router-dom'

const Lyout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Lyout