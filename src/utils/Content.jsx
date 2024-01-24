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
          display: "flex",
          flexDirection: "column",
          padding: isMobileScreen ?  "10px" : "20px",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px"
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
            fontSize: isMobileScreen ?  "1.5em" : "2.3em" ,
            fontWeight: "900",
            fontFamily: "Poppins",
            width: isMobileScreen ? "100%" : "70%",
            textAlign: "center",
            lineHeight: "40px"
          }}
        >
          {keyWord}
        </Typography>
        <Typography
          sx={{
            fontSize: isMobileScreen ?  "12px" : "0.89em",
            fontWeight: isMobileScreen ? "400" : "",
            fontFamily: "Poppins",
            width: isMobileScreen ?  "95%" : "50%" ,
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
