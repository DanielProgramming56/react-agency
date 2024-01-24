import { Box, Typography } from "@mui/material";
import React from "react";
import {useMediaQuery} from "@mui/material"
const ServicesWidget = ({ title, desc, path, buttonValue, image }) => {
  const isMobileScreen = useMediaQuery("(max-width: 1000px)")
  return (
    <Box
      className="boxShadow"
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "0px 0px 0px 40px",
        width: isMobileScreen ? "20em" : "25em",
        height: isMobileScreen ? "30em" : "35em",
        overflow: "hidden",
        borderBottomStyle: "solid",
        borderBottomWidth: "5px",
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomColor: "rgb(121, 140, 252)",
        padding: "10px 0px"
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          height: "18em",
          transition: "transform 0.3s ease-in-out",
          ":hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        {image}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "2em",
            color: "black",
            marginBottom: "20px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            color: "black",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {desc}
        </Typography>

        <button>{buttonValue}</button>
      </Box>
    </Box>
  );
};

export default ServicesWidget;
