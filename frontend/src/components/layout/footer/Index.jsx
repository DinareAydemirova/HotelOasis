import React from "react";
import style from "../footer/Footer.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.footerTexts}>
          <div className={style.about}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/logo-w.png"
              alt=""
            />
            <p>
              Sequi dolores ratione eos eveniet provident soluta. Omnis nesciunt
              sit eos at, eius voluptatum rem corporis. Doloremque labore
              assumenda explicabo velit illo, soluta, inventore hic.
            </p>
            <div className={style.social}>
              <FaTwitter />

              <FaFacebookF />
              <FaYoutube />
              <IoLogoInstagram />
              <FaLinkedinIn />
            </div>
          </div>
          <div className={style.pages}>
            <h3>Menu</h3>
            <div className={style.links}>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/rooms">Rooms</Link>
              <Link to="/restaurant">Restaurant</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className={style.pages}>
            <h3>Join Us</h3>
            <div className={style.links}>
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </div>
          </div>
          <div className={style.instagram}>
            <h3>Instagram</h3>
            <div className={style.images}>
              <Link to="https://www.instagram.com/p/CYAVMTDsb6x/">
                <img
                  src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-1-140x140.jpg"
                  alt=""
                />
              </Link>
              <Link to="https://www.instagram.com/p/CYAVQXRsWxB/">
                <img
                  src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-2-140x140.jpg"
                  alt=""
                />
              </Link>
              <Link to="https://www.instagram.com/p/CYAVSkwMjZM/">
                <img
                  src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3-140x140.jpg"
                  alt=""
                />
              </Link>
              <Link to="https://www.instagram.com/p/CYAVUG8s5ER/">
                <img
                  src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-4-140x140.jpg"
                  alt=""
                />
              </Link>
              <Link to="https://www.instagram.com/p/CYAVVmVsN7b/">
                <img
                  src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-5-140x140.jpg"
                  alt=""
                />
              </Link>
              <Link to="https://www.instagram.com/p/CYAVXIIMZDl/">
                <img
                  src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-6-140x140.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <p>© 2024 Kinsley. All Rights Reserved.</p>
          <p>Developed by: Dinara</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
