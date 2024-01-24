import { Box } from "@mui/material";
import React from "react";
import ServicesWidget from "./ServicesWidget";
import seoImage from "../assets/pexels-tobias-dziuba-942331.jpg"
import googleAds from "../assets/pexels-lisa-fotios-16368540.jpg"
import fb from "../assets/pexels-tracy-le-blanc-607812.jpg"
const data = [
  {
    title: "SEO",
    desc: "Ultimate only visibility and exposure awaits you with superior website optimization and search engine marketing solutions.",
    buttonValue: "View More",
    image: <img src={seoImage} alt={"image"} style={{ width: "28em", height: "18em", objectFit: "center" }} />,
    id: 0
  },
  {
    title: "Google Ads",
    desc: "Direct your target demographic straight to your products and services through powerful PPC ads on first-tier search engines.",
    buttonValue: "View More",
    image: <img src={googleAds} alt={"image"} style={{ width: "28em", height: "18em", objectFit: "center" }} />,
    id: 1
  },
  {
    title: "Facebook Ads",
    desc: "Begin generating leads and sales within days from intricate Facebook campaigns.",
    buttonValue: "View More",
    image: <img src={fb} alt={"image"} style={{ width: "28em", height: "18em", objectFit: "center" }}  loading="lazy"/>,
    id: 2
  },
];
const SetServicesWidget = () => {
  return (
    <Box sx={{
        display: "flex",
        gap: "50px",
        flexWrap: "wrap",
        justifyContent: "center"
    }}>
        {data.map(item => (
            <ServicesWidget key={item.id} path={item.path} title={item.title} desc={item.desc} buttonValue={item.buttonValue} image={item.image} />
        ))}
    </Box>
  );
};

export default SetServicesWidget;
