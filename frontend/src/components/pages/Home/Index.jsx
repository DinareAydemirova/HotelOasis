import React from 'react'
import Hero from '../Home/hero/Index'
import QuickInfo from './quickInfo/Index'
import Gallery from './gallery/Index'
import BestRooms from './bestRooms/Index'
import Services from './services/Index'
import Testimonial from './testimonial/Index'



const Home = () => {
  return (
    <div>
      <Hero/>
      <QuickInfo/>
      <Gallery/>
      <BestRooms/>
      <Services/>
      <Testimonial/>
    </div>
  )
}

export default Home