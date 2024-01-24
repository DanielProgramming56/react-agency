import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useParams, useLocation, Link } from "react-router-dom";
const Content = ({ intoContent, keyWord, description, buttonContent }) => {
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");

  const memoizedContent = useMemo(() => {
    return (
      <Box
        sx={{
          margin: isMobileScreen ? "5em 5px 0px 5px" : "10em 50px 0px 50px",
          display: "flex",
          flexDirection: "column",
          padding: isMobileScreen ?  "10px" : "20px",
          alignItems: "center",
          gap: isMobileScreen ? "5px" : "10px"
        }}
      >
        <Typography
          sx={{
            fontSize: isMobileScreen ?  "1em" : "1.1em",
            fontWeight: "700",
            fontFamily: "Poppins",
            textAlign: "center",
          }}
        >
          {intoContent}
        </Typography>
        <Typography
          sx={{
            fontSize: isMobileScreen ?  "2em" : "2.5em" ,
            fontWeight: "900",
            fontFamily: "Poppins",
            width: isMobileScreen ? "100%" : "50%",
            textAlign: "center",
            lineHeight: "47px",
          }}
        >
          {keyWord}
        </Typography>
        <Typography
          sx={{
            fontSize: isMobileScreen ?  "12px" : "0.89em",
            fontWeight: isMobileScreen ? "400" : "",
            fontFamily: "Poppins",
            width: isMobileScreen ?  "95%" : "30%" ,
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {description}
        </Typography>
        {buttonContent && <Link to={"/contact"}>
          <button
            style={{
              width: isMobileScreen ? "100%" : "20vw",
            }}
          >
            {" "}
            {buttonContent}
          </button>
        </Link>}
      </Box>
    );
  },[intoContent, keyWord, description, buttonContent])
  return memoizedContent;
};

export default Content;
