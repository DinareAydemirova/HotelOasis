import React from "react";
import style from "../aboutOurHotel/AboutOurHotel.module.scss";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { CgQuote } from "react-icons/cg";

const AboutOurHotel = () => {
  return (
    <div className={style.aboutOurHotel}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>About our Hotel</h1>
          <p>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
          <div className={style.home}>
            <Link to="/">Home</Link>
            <IoIosArrowForward />
            <p>About</p>
          </div>
          <div className={style.manager}>
            <div className={style.image}>
              <img
                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/author-950x909.png"
                alt=""
              />
              <div>
                <h3>Emma Freeman</h3>
                <p>Top Manager</p>
              </div>
            </div>
            <div className={style.info}>
              <p className={style.text}>
              
                Everyone would like to be treated like at home in the hotel, and
                at home - like in a hotel. Hospitality is a quality that is made
                up of primeval simplicity and antique grandeur.
              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurHotel;
