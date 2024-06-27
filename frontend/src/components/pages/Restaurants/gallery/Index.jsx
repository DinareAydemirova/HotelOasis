import React, { useEffect, useRef, useState } from "react";
import style from "../gallery/Gallery.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import SkeletonLoader from "../../../../skeletonLoader/Index";


const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const [data, setData] = useState([]);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    axios.get("/restaurant").then((res) => {
      setData(res.data);
    });
  }, []);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className={style.gallerySec}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>Restaurant photo Gallery</h1>
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
            {data?.map((elem) => {
              return (
                <SwiperSlide>
                  <img src={elem.image} alt="Slide 1"  onClick={() => openLightbox(elem.image)}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
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
        )}
        <div className={style.features}>
          <div>
            <span>400+</span>
            <p>Guests daily</p>
          </div>
          <div>
            <span>600</span>
            <p>Orders daily</p>
          </div>
          <div>
            <span>4</span>
            <p>Сomfortable halls</p>
          </div>
          <div>
            <span>14</span>
            <p>Professional chefs</p>
          </div>
        </div>
      </div>
      {lightboxImage && (
        <div className={style.lightbox} onClick={closeLightbox}>
          <img src={lightboxImage} alt="Lightbox" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
