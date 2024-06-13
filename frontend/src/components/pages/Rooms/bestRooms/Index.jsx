import React, { useRef, useState } from "react";
import style from '../bestRooms/BestRooms.module.scss'
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const BestRooms = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
          <SwiperSlide className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.room}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
              alt=""
            />
            <h2>Deluxe Room</h2>
            <p>
              Image for cattle earth. May one Which life divide sea. Optio
              veniam quibusdam fugit aspernatur ratione rerum necessitatibus
              ips...
            </p>
            <div className={style.booking}>
              <div className={style.pricing}>
                <h1>$49</h1>
                <p>per night</p>
              </div>
              <button>
                <CiBookmark /> Book
              </button>
            </div>
          </SwiperSlide>
          
        </Swiper>

        <div className={style.swipe}>
          <div className={style.count}>
            {currentSlide}/{totalSlides}
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
