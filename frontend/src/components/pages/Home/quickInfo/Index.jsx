import React from "react";
import style from "../quickInfo/QuickInfo.module.scss";
import { Link } from "react-router-dom";

const QuickInfo = () => {
  return (
    <div className={style.quickInfoSec}>
      <div className={style.container}>
        <div className={style.about}>
          <img
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-t1.jpg"
            alt=""
          />
          <div>
            <h1>We have 17+ years of Experience</h1>
            <p>Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio.</p>
            <Link to="/about">More about us</Link>
          </div>
          <div>
            <h1>Start your Amazing Adventure!</h1>
            <p>Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio.</p>
            <Link to="rooms">Choose a room</Link>
          </div>
          <img src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-t2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;
