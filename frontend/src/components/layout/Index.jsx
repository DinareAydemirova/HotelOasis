import React from 'react'
import Header from './header/Index'
import Footer from './footer/Index'
import { Outlet } from 'react-router-dom'
import ScrollToTopButton from './scrollToTop/Index'

const Lyout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
        <ScrollToTopButton />
    </div>
  )
}

export default Lyout