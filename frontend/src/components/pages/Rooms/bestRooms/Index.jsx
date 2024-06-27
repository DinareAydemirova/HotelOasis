import React, { useEffect, useRef, useState } from "react";
import style from "../bestRooms/BestRooms.module.scss";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import SkeletonLoader from "../../../../skeletonLoader/Index";

const BestRooms = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    axios.get("/rooms").then((res) => {
      const filteredRooms = res.data.filter(room => room.rate === 5);
      setData(filteredRooms);
      setLoading(false);
    });
  }, []);

  return (
    <div className={style.bestRoomsSec}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>Our Best Rooms</h1>
          <p>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
        </div>
        {loading ? (
          <SkeletonLoader /> 
        ) : (
          <Swiper
            className={style.rooms}
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTotalSlides(swiper.slides.length - 1);
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 3,
              },
            }}
          >
            {data?.map((elem, index) => (
              <SwiperSlide className={style.room} key={index}>
                <Link to={`/Rooms/${elem._id}`}>
                  <div className={style.imageWrapper}>
                    <img src={elem.images[0]} alt="" />
                  </div>
                  <h2>{elem.name}</h2>
                  <p>{elem.description.slice(0, 90)}...</p>
                  <div className={style.booking}>
                    <div className={style.pricing}>
                      <h1>${elem.price}</h1>
                      <p>per night</p>
                    </div>
                    <Link to={`/Rooms/${elem._id}`}>
                      <CiBookmark /> Book
                    </Link>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        
        <div className={style.swipe}>
          <div className={style.count}>
            {currentSlide}/{data.length}
          </div>
          <div className={style.arrows}>
            <div ref={prevRef} className={style.prevArrow}>
              <FaArrowLeft />
            </div>
            <div ref={nextRef} className={style.nextArrow}>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestRooms;
