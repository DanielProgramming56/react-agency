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
import logo from "../assets/Asset 4.svg";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";
const Navbar = () => {
  const [isMobileMenuToggle, setIsMobileMenuToggle] = useState(false);
  const isNoneMobileScreen = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

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
            
            PIXEL{" "}
            <span
              style={{
                fontSize: "1em",
                fontWeight: "900",
                color: "rgb(121, 140, 252)",
              }}
            >
              HARBOR
            </span>
          </Typography>
        </Link>

        {isNoneMobileScreen && (
          <Box
            sx={{
              padding: "30px",
            }}
          >
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Contact</Link>

            <button>REQUEST QUOTE</button>
          </Box>
        )}
        {!isNoneMobileScreen && <button>Menu</button>}
      </Box>
    </Box>
  );
};

export default Navbar;
