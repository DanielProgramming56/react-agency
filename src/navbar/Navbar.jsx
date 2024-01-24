import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";
const Navbar = () => {
  const [isMobileMenuToggle, setIsMobileMenuToggle] = useState(false);
  const isNoneMobileScreen = useMediaQuery("(min-width: 1000px)");


  return (
    <Box
      sx={{
        height: "10vh",
        display: "flex",
        justifyContent: "space-around",
        width: "100vw",
        marginTop: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
        }}
      >
        <Link to="/">
          <Typography
            sx={{
              fontSize: isNoneMobileScreen ? "2em" : "1.4em",
              fontWeight: "900",
              fontFamily: "Poppins",
            }}
          >
            
            Digital<span
              style={{
                fontSize: "1em",
                fontWeight: "900",
                color: "rgb(121, 140, 252)",
              }}
            >
              Plus
            </span>
          </Typography>
        </Link>

        {isNoneMobileScreen && (
          <Box
            sx={{
              padding: "30px",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="who-we-help">Who We Help</Link>
            <Link to="/about-us">About</Link>
            <Link>Services</Link>
            <Link to="/contact">Contact</Link>

            <button>REQUEST QUOTE</button>
          </Box>
        )}
        {!isNoneMobileScreen && <button>Menu</button>}
      </Box>
    </Box>
  );
};

export default Navbar;
