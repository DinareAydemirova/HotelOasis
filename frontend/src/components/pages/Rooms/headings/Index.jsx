import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import style from '../headings/Headings.module.scss'

const Heading = () => {
  return (
    <div className={style.rooms}>
    <div className={style.container}>
       <div className={style.headings}>
           <h1>Choose your Room</h1>
           <p>Laborum accusantium libero commodi. Voluptate consequatur itaque expedita accusamus impedit perspiciatis asperiores necessitatibus assumenda magnam ipsa.</p>
           <div className={style.home}>
          <Link to="/">Home</Link>
          <IoIosArrowForward />
          <p>Rooms</p>
        </div>
       </div>
    </div>
  </div>
  )
}

export default Heading