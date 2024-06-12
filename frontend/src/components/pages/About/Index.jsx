import React from "react";
import AboutOurHotel from "./aboutOurHotel/Index";
import Offers from "./offers/Index";
import Team from "./team/Index";
import Services from "./services/Index";
import Testimonial from "./testimonial/Index";

const About = () => {
  return (
    <div>
      <AboutOurHotel />
      <Offers />
      <Team />
      <Services />
      <Testimonial />
    </div>
  );
};

export default About;
