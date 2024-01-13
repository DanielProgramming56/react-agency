import React, {useEffect} from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const ContactPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div style={{ backgroundColor: "black" }}>
      <h1>Something is Happening Here Now?.</h1>
      <h2>Ask fo Help @ www.askforhelp.com</h2>

      <div
        data-aos="fade-zoom-in"
      >
        Hello world
      </div>
    </div>
  );
};

export default ContactPage;
