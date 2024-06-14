import React from 'react'
import Heading from './headings/Index'
import Gallery from './gallery/Index'
import Team from './team/Index'
import Menu from './menus/Index'
import Reservation from './reservation/Index'
import Testimonial from '../Restaurants/testimonial/Index'
import { Helmet } from 'react-helmet'

const Restaurants = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurat - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
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