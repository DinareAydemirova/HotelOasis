import React, { useState } from "react";
import style from "../offers/Offers.module.scss";
import { PiTaxi } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { PiSecurityCameraBold } from "react-icons/pi";
import { PiSwimmingPool } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { PiTelevision } from "react-icons/pi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

const Offers = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchVideoClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={style.offers}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>What We Offer For You</h1>
          <p>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
        </div>
        <div className={style.services}>
          <div>
            <PiTaxi className={style.icon} />
            <p>Airport transfer</p>
          </div>
          <div>
            <GiHotMeal className={style.icon} />
            <p>All inclusive</p>
          </div>
          <div>
            <TbAirConditioning className={style.icon} />
            <p>Air-conditioned</p>
          </div>
          <div>
            <PiSecurityCameraBold className={style.icon} />
            <p>Under protection</p>
          </div>
          <div>
            <PiSwimmingPool className={style.icon} />
            <p>4 private pools</p>
          </div>
          <div>
            <FaWifi className={style.icon} />
            <p>Free wi-fi</p>
          </div>
          <div>
            <PiTelevision className={style.icon} />
            <p>Smart TV</p>
          </div>
          <div>
            <MdOutlineLocalLaundryService className={style.icon} />
            <p>Laundry</p>
          </div>
        </div>
        <div className={style.watchVideo}>
          <div className={style.about}>
            <h1>Start your Amazing Adventure!</h1>
            <p>
              Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
              fugit ea delectus, sed voluptatem. Laborum accusantium libero
              commodi id officiis itaque esse adipisci, necessitatibus
              asperiores, illo odio.
            </p>
            <button onClick={handleWatchVideoClick}>Watch video</button>
          </div>
          <div className={style.video}>
            {showVideo ? (
              <iframe
                width="570"
                height="390"
                src="https://www.youtube.com/embed/wsq-r8lMMsk?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/about-8.jpg"
                  alt=""
                />
                <button className={style.play} onClick={handleWatchVideoClick}>
                  <FaPlay />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
