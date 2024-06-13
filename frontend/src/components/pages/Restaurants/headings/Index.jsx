import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import style from '../headings/Headings.module.scss'

const Heading = () => {
  return (
    <div className={style.rooms}>
    <div className={style.container}>
       <div className={style.headings}>
           <h1>Welcome to our Restaurant</h1>
           <p>Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio.</p>
           <div className={style.home}>
          <Link to="/">Home</Link>
          <IoIosArrowForward />
          <p>Restaurant</p>
        </div>
       </div>
    </div>
  </div>
  )
}

export default Heading