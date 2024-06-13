import React from "react";
import style from "../allRooms/AllRooms.module.scss";
import { CiBookmark } from "react-icons/ci";

const AllRooms = () => {
  return (
    <div className={style.allRooms}>
      <div className={style.container}>
        <div className={style.sorting}>
          <button>All rooms</button>
          <button>Economy</button>
          <button>Luxe</button>
          <button>Standard</button>
        </div>
        <div className={style.rooms}>
          <div className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </div>
          <div className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </div>
          <div className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </div>
          <div className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </div>
          <div className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </div>
          <div className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
