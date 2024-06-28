import React, { useEffect, useState } from "react";
import style from "./ScrollToTopButton.module.scss";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMessage } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={style.scrollToTop}>
      {isVisible && (
        <div className={style.buttons}>
          <button onClick={scrollToTop}>
            <FaArrowUp />
          </button>
          <button className={style.message}>
            <MdMessage />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
