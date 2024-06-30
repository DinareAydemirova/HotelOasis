import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiLogin, CiLogout } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import style from "./Header.module.scss";
import { UserContext } from "../../../context/userProvider";
import axios from "axios";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { decode, logout } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (decode) {
      axios
        .get(`/users/${decode._id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err));
    }
  }, [decode]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => (location.pathname === path ? style.active : "");

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
              <li className={isActive("/Rooms")}>
                <Link to="/Rooms">Rooms</Link>
              </li>
              <li className={isActive("/Restaurants")}>
                <Link to="/Restaurants">Restaurant</Link>
              </li>
              <li className={isActive("/contact")}>
                <Link to="/contact">Contact</Link>
              </li>
              <div className={style.loginregister}>
                {decode ? (
                  <>
                    <li
                      className={style.logout}
                      style={{
                        fontSize: "15px",
                        color: "#383a4e",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <CiLogout />
                      <button onClick={logout}>Logout</button>
                    </li>
                    <li>
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <IoPersonOutline /> {decode.firstName}
                      </p>
                    </li>
                  </>
                ) : (
                  <>
                    <li className={isActive("/login")}>
                      <Link
                        to="/login"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <p>Log in</p> <CiLogin />
                      </Link>
                    </li>
                    <li className={isActive("/register")}>
                      <Link
                        to="/register"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <p>Sign Up</p> <IoPersonOutline />
                      </Link>
                    </li>
                  </>
                )}
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
