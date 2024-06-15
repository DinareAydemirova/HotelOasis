import React from "react";
import style from "../modal/Modal.module.scss";

const Modal = ({ closeModal }) => {
  return (
    <div className={style.modal}>
      <div className={style.container}>
        <button className={style.closeButton} onClick={() => closeModal(false)}>
          X
        </button>
        <form>
           
          <input type="date"/>
          <input type="time" />
          <input type="email" placeholder="Email" />
          <select defaultValue="2 people">
            <option value="1 person">1 person</option>
            <option value="2 people">2 people</option>
            <option value="3 people">3 people</option>
            <option value="4 people">4 people</option>
            <option value="5 people">5 people</option>
            <option value="5 people">6 people</option>
            <option value="5 people">7 people</option>
            <option value="5 people">8 people</option>
            <option value="5 people">9 people</option>
            <option value="5 people">10 people</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
