import { Box } from '@mui/material';
import BoxWithCurve from 'components/BoxWithCurve';
import HomeAboutUs from 'components/HomeAboutUs';
import SetHomeBox from 'components/setHomeBox';
import React from 'react';
import { useMediaQuery } from "@mui/material";

const HomePage = () => {
    const isMobileScreen = useMediaQuery("(max-width: 1000px)");
    return (
        <Box sx={{
            padding: isMobileScreen ? "20px  50px" : "30px  200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <SetHomeBox />
            <HomeAboutUs />
        </Box>
    );
}

export default HomePage;

