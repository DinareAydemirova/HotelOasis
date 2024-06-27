import React, { useEffect, useRef, useState } from "react";
import style from "../gallery/Gallery.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import SkeletonLoader from "../../../../skeletonLoader/Index";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    axios.get("/gallery").then((res) => {
      setData(res.data);
      setLoading(false);
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
          <h1>Kinsley is Waiting for You!</h1>
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
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
              onSlideChange={(swiper) =>
                setCurrentSlide(swiper.realIndex + 1)
              }
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
              {data?.map((elem, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={elem.Image}
                    alt={`Gallery Image ${index + 1}`}
                    onClick={() => openLightbox(elem.Image)}
                  />
                </SwiperSlide>
              ))}
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
            <span>4</span>
            <p>Hotels</p>
          </div>
          <div>
            <span>127</span>
            <p>Rooms</p>
          </div>
          <div>
            <span>6</span>
            <p>Beaches</p>
          </div>
          <div>
            <span>4586</span>
            <p>Guests</p>
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
