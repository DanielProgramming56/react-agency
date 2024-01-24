import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import HubSpot from "../assets/hu1925c342--logo-canvas-web-style-guide-brand-guidelines.png";
import { ReactComponent as Shopee } from "../assets/shopee-seeklogo.svg";
import Fassai from "../assets/pngegg.png";
import GooglePartner from "../assets/kisspng-google-i-o-google-developers-mobile-app-developmen-5b081e5255a858.2913219215272587063509.png";
import GoPay from "../assets/toppng.com-gopay-logo-png-image-1024x213.png";
import Allianz from "../assets/pngwing.com.png";

//"rgb(249,249,249)"
const Partners = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const SmallScreenHeight = useMediaQuery("(max-height: 896px)");
  return (
    <Box
      sx={{
        height: SmallScreenHeight ?  "50vh" : "33vh" ,
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        marginTop: "20px",
        padding: "20px"
      }}
      >
      <Box
        sx={{
          
          width: isMobileScreen ? "100vw" : "80%",
          height: SmallScreenHeight ? "40vh" : "30vh",
          borderRadius: isMobileScreen ? "0px" : "20px",
          ":hover": isMobileScreen
            ? ""
            : {
                boxShadow: "0px 1px 10px -2px rgba(121,140,252,0.63)",
              },
          display: "flex",
          padding: isMobileScreen ? "15px" : "20px",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3
          style={{
            color: "rgb(121, 140, 252)",
            fontSize: isMobileScreen ? "1.3em" : "2em",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Our Partners And Client's Worldwide
        </h3>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: isMobileScreen ? "10px" : "50px",
            alignItems: "center",
            position: "relative",
            flexWrap: "wrap",
          }}
        >
          <img
            className="bounce-image"
            style={{
              width: SmallScreenHeight ? "120px" : "150px",
            }}
            src={HubSpot}
            alt="Hubspot Logo"
            loading="lazy"
          />

          <Shopee
            className="bounce-image"
            style={{
              width: SmallScreenHeight ? "50px" : "60px",
            }}
          />

          <img
            className="bounce-image"
            style={{
              width: SmallScreenHeight ? "100px" : "150px",
            }}
            src={GoPay}
            alt="Go Pay Logo"
            loading="lazy"
          />

          <img
            className="bounce-image"
            style={{
              width: SmallScreenHeight ? "100px" : "150px",
            }}
            src={Fassai}
            alt="Fassai Logo"
            loading="lazy"
          />
          <img
            className="bounce-image"
            style={{
              width: SmallScreenHeight ? "60px" : "100px",
            }}
            src={GooglePartner}
            alt="GooglePartner Logo"
            loading="lazy"
          />

          <img
            className="bounce-image"
            style={{
              width: SmallScreenHeight ? "100px" : "150px",
            }}
            src={Allianz}
            alt="Allianz Logo"
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
