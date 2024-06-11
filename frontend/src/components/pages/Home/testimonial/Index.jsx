import React from "react";
import style from "../testimonial/Testimonial.module.scss";
import { CgQuote } from "react-icons/cg";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Testimonial = () => {
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
        <Splide className={style.comments}>
          <SplideSlide className={style.comment}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/faces-3-scaled-1-140x140.jpg"
              alt=""
            />
            <h2>Viktoria Freeman</h2>
            <p>From Ukraine</p>

          

              <p className={style.text}>
              <CgQuote className={style.quote1}/>

                Dequi folores dolor sit amet, consectetur adipisicing elit.
                Nesciunt illo, delectus totam! Delectus illo magnam voluptatem a
                tempora id vitae dolor, quis natus iusto molestiae ab nam error
                vero possimus ullam facilis porro veritatis?
              <CgQuote className={style.quote2}/>

              </p>
    
          </SplideSlide>
          <SplideSlide className={style.comment}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/faces-4-140x140.jpg"
              alt=""
            />
            <h2>VPaul Oldman</h2>
            <p>From Spain</p>

          

              <p className={style.text}>
              <CgQuote className={style.quote1}/>

                Dequi folores dolor sit amet, consectetur adipisicing elit.
                Nesciunt illo, delectus totam! Delectus illo magnam voluptatem a
                tempora id vitae dolor, quis natus iusto molestiae ab nam error
                vero possimus ullam facilis porro veritatis?
              <CgQuote className={style.quote2}/>

              </p>
    
          </SplideSlide>
          <SplideSlide className={style.comment}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/faces-1-140x140.jpg"
              alt=""
            />
            <h2>Viktoria Freeman</h2>
            <p>From Poland</p>

          

              <p className={style.text}>
              <CgQuote className={style.quote1}/>

                Dequi folores dolor sit amet, consectetur adipisicing elit.
                Nesciunt illo, delectus totam! Delectus illo magnam voluptatem a
                tempora id vitae dolor, quis natus iusto molestiae ab nam error
                vero possimus ullam facilis porro veritatis?
              <CgQuote className={style.quote2}/>

              </p>
    
          </SplideSlide>
          <SplideSlide className={style.comment}>
            <img
              src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/faces-2-140x140.jpg"
              alt=""
            />
            <h2>Emma Trueman</h2>
            <p>From Italy</p>

          

              <p className={style.text}>
              <CgQuote className={style.quote1}/>

                Dequi folores dolor sit amet, consectetur adipisicing elit.
                Nesciunt illo, delectus totam! Delectus illo magnam voluptatem a
                tempora id vitae dolor, quis natus iusto molestiae ab nam error
                vero possimus ullam facilis porro veritatis?
              <CgQuote className={style.quote2}/>

              </p>
    
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Testimonial;
