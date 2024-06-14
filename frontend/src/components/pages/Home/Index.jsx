import React from "react";
import Hero from "../Home/hero/Index";
import QuickInfo from "./quickInfo/Index";
import Gallery from "./gallery/Index";
import BestRooms from "./bestRooms/Index";
import Services from "./services/Index";
import Testimonial from "./testimonial/Index";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Home - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <Hero />
      <QuickInfo />
      <Gallery />
      <BestRooms />
      <Services />
      <Testimonial />
    </div>
  );
};

export default Home;
