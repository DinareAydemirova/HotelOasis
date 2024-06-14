import React from "react";
import style from "../menus/Menu.module.scss";

const Menu = () => {
  return (
    <div className={style.allmenus}>
      <div className={style.container}>
        <div className={style.sorting}>
          <button>All rooms</button>
          <button>Economy</button>
          <button>Luxe</button>
          <button>Standard</button>
        </div>
        <div className={style.menus}>
          <div className={style.menu}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/menu-5-950x634.jpg"
              alt=""
            />
            <h2>Casserole</h2>
            <p>Libero, non, aut, dignissimos, optio hic.</p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>/night</p>
              </div>
            </div>
          </div>
          <div className={style.menu}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/menu-5-950x634.jpg"
              alt=""
            />
            <h2>Casserole</h2>
            <p>Libero, non, aut, dignissimos, optio hic.</p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>/night</p>
              </div>
            </div>
          </div>
          <div className={style.menu}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/menu-5-950x634.jpg"
              alt=""
            />
            <h2>Casserole</h2>
            <p>Libero, non, aut, dignissimos, optio hic.</p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>/night</p>
              </div>
            </div>
          </div>
          <div className={style.menu}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/menu-5-950x634.jpg"
              alt=""
            />
            <h2>Casserole</h2>
            <p>Libero, non, aut, dignissimos, optio hic.</p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>/night</p>
              </div>
            </div>
          </div>
          <div className={style.menu}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/menu-5-950x634.jpg"
              alt=""
            />
            <h2>Casserole</h2>
            <p>Libero, non, aut, dignissimos, optio hic.</p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>/night</p>
              </div>
            </div>
          </div>
          <div className={style.menu}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/menu-5-950x634.jpg"
              alt=""
            />
            <h2>Casserole</h2>
            <p>Libero, non, aut, dignissimos, optio hic.</p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>/night</p>
              </div>
            </div>
          </div>
        </div>
        <button className={style.loadMore}>Load more</button>
      </div>
    </div>
  );
};

export default Menu;
