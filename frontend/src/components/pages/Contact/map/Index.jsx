import React from "react";
import style from "../map/Map.module.scss";

const Map = () => {
  return (
    <div className={style.map}>
      <div className={style.container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.7008610522607!2d49.84904458487168!3d40.37719389782147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e1!3m2!1sen!2sbd!4v1707418765094!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
