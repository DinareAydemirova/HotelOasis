import React from "react";
import video from "../../../../assets/hotel.mp4";
import style from "../hero/Hero.module.scss";
import { FaStar } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import { PiTaxi } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { PiSecurityCameraBold } from "react-icons/pi";

const Hero = () => {
  const handleVideoClick = () => {
    window.open("https://www.youtube.com/watch?v=wsq-r8lMMsk&t=1s", "_blank");
  };

  return (
    <div className={style.main}>
      <video src={video} autoPlay loop muted />
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h1>Welcome to Kinsley</h1>
          <p>Deleniti nostrum laboriosam praesentium quasi quam voluptate.</p>
          <button className={style.video} onClick={handleVideoClick}>
            <FaRegPlayCircle /> <p>Watch the video</p>
          </button>
        </div>
        <div className={style.features}>
          <div>
            <PiTaxi />
            <p>Airport transfer</p>
          </div>
          <div>
            <GiHotMeal />
            <p>All inclusive</p>
          </div>
          <div>
            <TbAirConditioning />
            <p>Air-conditioned</p>
          </div>
          <div>
            <PiSecurityCameraBold />
            <p>Under protection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
