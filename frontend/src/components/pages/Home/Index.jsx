import React from 'react'
import Hero from '../Home/hero/Index'
import QuickInfo from './quickInfo/Index'
import Gallery from './gallery/Index'


const Home = () => {
  return (
    <div>
      <Hero/>
      <QuickInfo/>
      <Gallery/>
    </div>
  )
}

export default Home