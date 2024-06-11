import React from "react";
import style from "../services/Services.module.scss";

const Services = () => {
  return (
    <div className={style.serVicesSec}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>Around The Hotel</h1>
          <p>Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci, necessitatibus asperiores, illo odio.</p>
        </div>
        <div className={style.services}>
          <div className={style.card}>
             <img src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/service-6-950x1473.jpg" alt="" />
             <div>Free</div>
             <span>
                <h1>GYM</h1>
                <p>Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo</p>
             </span>
          </div>
          <div className={style.card}>
             <img src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/service-2-950x1266.jpg" alt="" />
             <div>$10 Per guest</div>
             <span>
                <h1>Pool</h1>
                <p>Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo</p>
             </span>
          </div>
          <div className={style.card}>
             <img src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/service-1-950x1425.jpg" alt="" />
             <div>Free</div>
             <span>
                <h1>Restaurant</h1>
                <p>Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo</p>
             </span>
          </div>
        </div>
      
      </div>
     
    </div>
  );
};

export default Services;
