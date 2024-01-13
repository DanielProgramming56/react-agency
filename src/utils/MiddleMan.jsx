import { Box } from "@mui/material";
import Navbar from "navbar/Navbar";
import React from "react";
import Content from "./Content";
import { useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";

const MiddleMan = () => {
  const { pathname } = useLocation();
  const isLowHeight = useMediaQuery("(max-height: 740px)");
  let intoContent = "";
  let keyWord = "";
  let description = "";
  let buttonContent = "";

  console.log(pathname);

  if ("/" === pathname) {
    intoContent =
      "A Versatile Powerhouse for WordPress, SEO, Social Media, and More";
    keyWord = "Revolutionize Your Digital Presence with Speed and Precision";
    description =
      "Pixel Harbor Agency, the all-in-one solution for a dynamic online presence – We empower your business to navigate the digital landscape with unmatched speed and precision.";
    buttonContent = "Get Started";
  }
  if ('/contact' == pathname) {
    keyWord = "Contact Us";
    description =
      "Have questions? Want to get your personalized plan? Be sure to contact us today using the contact information available below.";
      buttonContent = "Reach Us"
  }
  let whoWeHelp;
  let about;
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
        height: isLowHeight ? "100vh" : "80vh",
      }}
    >
      <Box className="overlay">
        <Navbar />
        <Content
          intoContent={intoContent}
          description={description}
          keyWord={keyWord}
          buttonContent={buttonContent}
        />
      </Box>
    </Box>
  );
};

export default MiddleMan;
