import React from "react";
import style from "../contactUs/Contact.module.scss";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const ContactUs = () => {
  return (
    <div className={style.contact}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>Get in Touch</h1>
          <p>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
          <div className={style.home}>
            <Link to="/">Home</Link>
            <IoIosArrowForward />
            <p>Contact</p>
          </div>
        </div>
        <div className={style.getInTouch}>
          <div className={style.inTouch}>
            <CiLocationOn className={style.icon} />
            <p>Santo Domingo 9479 Magarto st.</p>
          </div>
          <div className={style.inTouch}>
            <FiPhoneCall className={style.icon} />

            <p>+93 (736) 6X8 84 84</p>
          </div>
          <div className={style.inTouch}>
            <TfiEmail className={style.icon} />

            <p>kinsley.inbox@mail.com</p>
          </div>
        </div>
      
      </div>
     
    </div>
  );
};

export default ContactUs;
