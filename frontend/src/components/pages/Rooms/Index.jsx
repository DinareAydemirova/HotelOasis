import React from 'react'
import Heading from './headings/Index';
import AllRooms from './allRooms/Index';
import BestRooms from './bestRooms/Index';
import Testimonial from './testimonial/Index';
import { Helmet } from 'react-helmet';


const Rooms = () => {
  return (
   <>
   <Helmet>
        <title>Rooms - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
   <Heading/>
   <AllRooms/>
   <BestRooms/>
  <Testimonial/>
   </>
  )
}

export default Rooms