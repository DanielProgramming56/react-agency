import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

const BoxWithCurve =  React.memo(
  ({ imgOne, imgTwo, keyWord, desc, buttonValue }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return (
      <Box
        className="boxShadow"
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          width: isMobileScreen ? "90%" : "15em",
          height: "20em",
          alignItems: "center",
          borderRadius: "0px 30px 0px 30px",
        }}
      >
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="boxShadowCircle"
          sx={{
            width: "7em",
            height: "7em",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            color: "rgb(121, 140, 252)",
            alignItems: "center",
            outline: "1px solid rgb(121, 140, 252)",
            fontSize: "12px",
            padding: "5px",
            marginBottom: "20px",
            ":hover": {
              backgroundColor: "#4F8CFC",
            },
          }}
        >
          {isHovered ? (
            imgOne
          ) : (
            imgTwo
          )}
        </Box>
        <>
          <Typography
            sx={{
              color: "black",
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "5px",
            }}
          >
            {keyWord}
          </Typography>
  
          <Typography
            sx={{
              color: "black",
              fontFamily: "Poppins",
              fontSize: "12px",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            {desc}
          </Typography>
  
          <button>{buttonValue}</button>
        </>
      </Box>
    );
  }
)

export default BoxWithCurve;
