import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiLogin } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import style from "../header/Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? style.active : "";
  };

  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <div className={style.navigation}>
          <img
            src="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png"
            alt="Logo"
          />
          <div className={style.pages}>
            <ul className={menuOpen ? style.open : ""}>
              <li className={isActive("/")}>
                <Link to="/">Home</Link>
              </li>
              <li className={isActive("/about")}>
                <Link to="/about">About</Link>
              </li>
              <li className={isActive("/rooms")}>
                <Link to="/Rooms">Rooms</Link>
              </li>
              <li className={isActive("/restaurants")}>
                <Link to="/Restaurants">Restaurant</Link>
              </li>
              <li className={isActive("/contact")}>
                <Link to="/contact">Contact</Link>
              </li>
              <div className={style.loinregister}>
                <li className={isActive("/login")}>
                  <Link to="/login">
                    Log in
                    <CiLogin />
                  </Link>
                </li>
                <li className={isActive("/register")}>
                  <Link to="/register">
                    Sign Up
                    <IoPersonOutline />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <RxHamburgerMenu className={style.menu} onClick={handleMenuToggle} />
        </div>
      </div>
    </div>
  );
};

export default Header;
