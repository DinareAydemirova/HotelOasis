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
  const [guests, setGuests] = useState(0);
  const [orders, setOrders] = useState(0);
  const [halls, setHalls] = useState(0);
  const [chefs, setChefs] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    axios.get("/restaurant").then((res) => {
      setData(res.data);
      setLoading(false);
    }).catch((err) => {
      console.error(err);
      setLoading(false);
    });

    const incrementCounts = () => {
      incrementValue(400, setGuests, 100);
      incrementValue(600, setOrders);
      incrementValue(4, setHalls);
      incrementValue(14, setChefs);
    };

    const incrementValue = (finalValue, setter, baseValue = 0) => {
      let currentValue = baseValue;
      const increment = (finalValue - baseValue) / 100;
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          setter(finalValue);
          clearInterval(interval);
        } else {
          setter(Math.ceil(currentValue));
        }
      }, 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          incrementCounts();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, [hasAnimated]);

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
          <h1>Restaurant Photo Gallery</h1>
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
              {data?.map((elem, index) => (
                <SwiperSlide key={index}>
                  <img src={elem.image} alt={`Slide ${index + 1}`} onClick={() => openLightbox(elem.image)} />
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
        <div className={style.features} ref={featuresRef}>
          <div>
            <span>{guests}+</span>
            <p>Guests daily</p>
          </div>
          <div>
            <span>{orders}</span>
            <p>Orders daily</p>
          </div>
          <div>
            <span>{halls}</span>
            <p>Comfortable halls</p>
          </div>
          <div>
            <span>{chefs}</span>
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
