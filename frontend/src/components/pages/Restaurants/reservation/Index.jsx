import React, { useState } from "react";
import style from "../reservation/Reservation.module.scss";
import Modal from "../modal/Index";

const Reservation = () => {
  const [openModal, setmpenModal] = useState(false)
  return (
    <div className={style.reservation}>
      <div className={style.container}>
        <div className={style.reserveTable}>
        <div className={style.image}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/service-3.jpg"
              alt=""
            />
          </div>
          <div className={style.about}>
            <h1>We invite you to visit our restaurant</h1>
            <p>
              Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
              fugit ea delectus, sed voluptatem. Laborum accusantium libero
              commodi id officiis itaque esse adipisci, necessitatibus
              asperiores, illo odio.
            </p>

            <button onClick={()=> {setmpenModal(true)}}>Reservation</button>
           
          </div>
        </div>
        {openModal && <Modal closeModal={setmpenModal}/>}

      </div>
    </div>
  );
};

export default Reservation;
