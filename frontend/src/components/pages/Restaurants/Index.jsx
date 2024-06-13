import React from 'react'
import Heading from './headings/Index'
import Gallery from './gallery/Index'
import Team from './team/Index'
import Menu from './menus/Index'
import Reservation from './reservation/Index'
import Testimonial from '../Restaurants/testimonial/Index'

const Restaurants = () => {
  return (
    <div>
      <Heading/>
      <Gallery/>
      <Team/>
      <Menu/>
      <Reservation/>
      <Testimonial/>
    </div>
  )
}

export default Restaurants