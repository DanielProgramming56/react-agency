import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const HomeService = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  return (
    <Box
      sx={{
        backgroundColor: "rgb(121, 140, 252)",
        width: "100%",
        height: isMobileScreen ? "60vh" : "35vh",
        padding: isMobileScreen ? "30px 10px" : " 50px 300px",
        display: "flex",
        justifyContent: "center",
        alignItems: isMobileScreen ? "start" : "center",
        flexDirection: isMobileScreen ? "column" : "row",
        gap: "50px"
      }}
    >
      <Box
        sx={{
          flex: isMobileScreen ? 0 : 1.5,
        }}
      >
        <Typography sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: isMobileScreen ? "18px" : "20px",
        }}>Services We Offer</Typography>
        <Typography sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: isMobileScreen ? "1.5em" : "2em",
            marginBottom: isMobileScreen ?  "10px" : ""
        }}>A Digital Solution for Every Industry.</Typography>
      </Box>
      <Box sx={{
          flex: isMobileScreen ? 0 : 2.5,
          marginLeft: isMobileScreen ? 0 : "30px",
        }}>
        <Typography sx={{
            fontFamily: "Poppins",
            fontSize: "14px",
        }}>
          Digital Plus offers a complete platform of digital marketing
          services. Instead of searching for multiple companies to deliver
          high-quality projects, learn how our unified team of experts delivers
          comprehensive marketing services that synergic and deliver
          unparalleled results for your business. Browse our platform of
          services below to begin exploring your future in digital marketing!
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeService;
