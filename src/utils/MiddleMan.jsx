import { Box } from "@mui/material";
import Navbar from "navbar/Navbar";
import React from "react";
import Content from "./Content";
import { useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import bgImage1 from "../assets/pexels-darlene-alderson-7970846.jpg";
import bgImage2 from "../assets/pexels-mikhail-nilov-9301314.jpg";
import bgImage3 from "../assets/pexels-lukas-669619.jpg";
const MiddleMan = () => {
  const { pathname } = useLocation();
  let intoContent = "";
  let keyWord = "";
  let description = "";
  let buttonContent = "";
  let bgImage = "";
  let heightSize = "";
  if ("/" === pathname) {
    intoContent =
      "A Versatile Powerhouse for WordPress, SEO, Social Media, and More";
    keyWord = "Revolutionize Your Digital Presence with Speed and Precision";
    description =
      "Digital Plus Agency, the all-in-one solution for a dynamic online presence – We empower your business to navigate the digital landscape with unmatched speed and precision.";
    buttonContent = "Get Started";
    bgImage = bgImage1;
    heightSize = "80vh";
  }
  if ("/contact" == pathname) {
    keyWord = "Contact Us";
    description =
      "Have questions? Want to get your personalized plan? Be sure to contact us today using the contact information available below.";
    heightSize = "50vh";
  }
  let whoWeHelp;
  
  if ("/who-we-help" == pathname) {
    keyWord = "Who We Help";
    description =
      "Our team assists a variety of businesses from small, entrepreneurial startups to large-scale established corporations. Take a look and see how you can benefit from our plans!";
    buttonContent = "";
    bgImage = bgImage2;
    heightSize = "50vh";
  }
  let about;

  if ("/about-us" == pathname) {
    keyWord = "About Pixel Harbor";
    description =
      "Get to know about the team at Business Name. Discover what makes our digital marketing experts different from the competition.";
    bgImage = bgImage3;
    heightSize = "50vh";
  }
  let caseStudies;
  let services = {
    seo: "",
    googleAds: "",
    facebookAds: "",
    tiktokAds: "",
    listing: "",
    socialPost: "",
    content: "",
    website: "",
  };
  return (
    <Box
      className="middleman-bg"
      sx={{
        height: heightSize,
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Box className="overlay">
        <Navbar />
        <Content
          intoContent={intoContent}
          description={description}
          keyWord={keyWord}
          buttonContent={buttonContent}
          bgImage={bgImage}
        />
      </Box>
    </Box>
  );
};

export default MiddleMan;
