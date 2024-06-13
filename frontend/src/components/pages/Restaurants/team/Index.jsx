import React from "react";
import style from "../team/Team.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Team = () => {
  return (
    <div className={style.teamSec}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>Our awesome Team</h1>
          <p>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
        </div>

        <div className={style.teamMembers}>
          <div className={style.member}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/rteam-1.jpg"
              alt=""
            />
            <h3>Emma Newman</h3>
            <p>Chef</p>
            <div className={style.social}>
              <div>
                <FaFacebookF />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className={style.member}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/rteam-2.jpg"
              alt=""
            />
            <h3>Paul Trueman</h3>
            <p>Chef</p>
            <div className={style.social}>
              <div>
                <FaFacebookF />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className={style.member}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/rteam-3.jpg"
              alt=""
            />
            <h3>Viktoria Freeman</h3>
            <p>Chef</p>
            <div className={style.social}>
              <div>
                <FaFacebookF />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className={style.member}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/rteam-2.jpg"
              alt=""
            />
            <h3>Paul Trueman</h3>
            <p>Chef</p>
            <div className={style.social}>
              <div>
                <FaFacebookF />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
