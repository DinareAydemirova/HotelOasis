import React from "react";
import style from "../liveMessage/LiveMessage.module.scss";
import { Link } from "react-router-dom";

const LiveMessage = () => {
  return (
    <div className={style.messageSection}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>Kinsley is Waiting for You!</h1>
          <p>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
          <Link to="/about">Learn about us</Link>
        </div>

        <div className={style.message}>
          <form action="#">
            <div className={style.inputs}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <textarea placeholder="Message"></textarea>
          </form>
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default LiveMessage;
