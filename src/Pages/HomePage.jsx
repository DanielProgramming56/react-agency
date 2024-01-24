import { Box } from '@mui/material';
import HomeAboutUs from 'components/HomeAboutUs';
import SetHomeBox from 'components/setHomeBox';
import React from 'react';
import HomeService from 'components/HomeService';
import SetServicesWidget from 'components/setServicesWidget';
import HomePortfolio from 'components/HomePortfolio';
import Partners from 'components/Partners';

const HomePage = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "70px"
        }}>
            <SetHomeBox />
            <HomeAboutUs />
            <HomeService />
            <SetServicesWidget />
            <HomePortfolio/>
            <Partners />
        </Box>
    );
}

export default HomePage;

