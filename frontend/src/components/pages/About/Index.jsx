import React from "react";
import AboutOurHotel from "./aboutOurHotel/Index";
import Offers from "./offers/Index";
import Team from "./team/Index";
import Services from "./services/Index";
import Testimonial from "./testimonial/Index";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <AboutOurHotel />
      <Offers />
      <Team />
      <Services />
      <Testimonial />
    </div>
  );
};

export default About;
