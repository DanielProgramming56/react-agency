import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useParams, useLocation, Link } from "react-router-dom";
import Aos from "aos";
const Content = ({intoContent, keyWord, description, buttonContent}) => {
  const isNoneMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <Box 
      sx={{
        margin: isNoneMobileScreen ? "10em 50px 0px 50px" : "5em 5px 0px 5px",
        display: "flex",
        flexDirection: "column",
        padding: isNoneMobileScreen ? "20px" : "10px",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: isNoneMobileScreen ? "1.1em" : "1em",
          fontWeight: "700",
          fontFamily: "Poppins",
          textAlign: "center"
        }}
      >
        {intoContent}
      </Typography>
      <Typography
        sx={{
          fontSize: isNoneMobileScreen ? "2.5em" : "2em",
          fontWeight: "900",
          fontFamily: "Poppins",
          width: isNoneMobileScreen ? "50%" : "100%",
          textAlign: "center",
          lineHeight: "47px"
        }}
      >
        {keyWord}
      </Typography>
      <Typography
        sx={{
          fontSize: isNoneMobileScreen ? "0.89em" : "12px",
          fontWeight: isNoneMobileScreen ? "400" : "",
          fontFamily: "Poppins",
          width: isNoneMobileScreen ? "40%" : "95%",
          textAlign: "center",
          marginBottom: "10px"
        }}
      >
       {description}
      </Typography>
      <Link to={"/contact"}>
      <button style={{
        width: isNoneMobileScreen ? "20vw" : "100%"
      }}> {buttonContent}</button>
      </Link>
    </Box>
  );
};

export default Content;
