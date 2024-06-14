import React from "react";
import ContactUs from "./contactUs/Index";
import LiveMessage from "./liveMessage/Index";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
    <Helmet>
        <title>Contact - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <ContactUs />
      <LiveMessage/>
    </>
  );
};

export default Contact;
