import React, { useEffect, useState } from "react";
import style from "../testimonial/Testimonial.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import axios from "axios";

const Testimonial = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get("/comment").then((res) => {
      setData(res.data);
    });
  }, []);

  const splideOptions = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    pagination: true,
    arrows: true,
    breakpoints: {
      768: {
        perPage: 1,
      },
      1024: {
        perPage: 2,
      },
    },
  };

  return (
    <div className={style.testimonialSec}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>Feedback from our Guests</h1>
          <p>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
        </div>
        <Splide options={splideOptions} className={style.comments}>
          {data.map((elem) => (
            <SplideSlide key={elem._id} className={style.comment}>
              <div className={style.commentContent}>
                <h2>{elem.username}</h2>
                <p className={style.text}>{elem.comment}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonial;
