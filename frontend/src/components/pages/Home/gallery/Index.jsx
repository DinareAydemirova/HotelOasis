import React, { useRef, useState } from "react";
import style from "../gallery/Gallery.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={style.gallerySec}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>Kinsley is Waiting for You!</h1>
          <p>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
        </div>
        <div className={style.swiper}>
          <Swiper
            className={style.images}
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
              700: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <img
                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-1.jpg"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-2.jpg"
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                alt="Slide 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-4.jpg"
                alt="Slide 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-5.jpg"
                alt="Slide 5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-6.jpg"
                alt="Slide 6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-7.jpg"
                alt="Slide 7"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-8.jpg"
                alt="Slide 8"
              />
            </SwiperSlide>
          </Swiper>
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
        <div className={style.features}>
          <div >
            <span>4</span>
            <p>Hotels</p>
          </div>
          <div>
            <span>127</span>
            <p>Rooms</p>
          </div>
          <div >
            <span>6</span>
            <p>Beaches</p>
          </div>
          <div >
            <span>4586</span>
            <p>Guests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
