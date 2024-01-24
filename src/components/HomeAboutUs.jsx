import { Box, Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from "@mui/material";
import salesPersonImg  from "/home/danielchidebere/Documents/PIXEL/eng/react-agency/src/assets/pexels-linkedin-sales-navigator-7245806.jpg"
import { Link } from 'react-router-dom';
const HomeAboutUs = () => {
    const isMobileScreen = useMediaQuery("(max-width: 1000px)");
    return (
        <Box sx={{
            marginTop: "30px",
            display: 'flex',
            justifyContent: "center",
            padding: isMobileScreen ? "30px 20px" : " 50px 150px",
            alignItems: "center",
        }}>
            <Box sx={{flex: !isMobileScreen ? 2 : ""}}>
                <Typography sx={{
                    color: "rgb(121, 140, 252)",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: "24px",
                }}>
                    About Us
                </Typography>
                <hr style={{
                    color: "rgb(121, 140, 252)",
                    border: "1px solid",
                    width: "100px"
                }}/>
                <Typography sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    fontSize: isMobileScreen ? "1.7em" : "2.4em",
                    marginTop: "20px",
                    width: isMobileScreen ? "100%" : "90%"
                }}>
                    <span style={{color: "rgb(121, 140, 252)", fontWeight: "bold",
                    fontSize: "1em",}}>Pixel Harbor</span> is  a Top Global Digital Marketing Agency.
                </Typography>
                <Typography sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    fontSize: "1em",
                    marginTop: "20px",
                    width: isMobileScreen ? "100%" : "90%",
                    fontWeight: "light"
                }}>
                    Pixel Harbor offer's  a complete platform of digital marketing services designed to provide options for businesses of every size and structure. We saw that many businesses faced the problem of seeking out multiple agencies to fulfill their various needs when they simply weren't getting results from one strategy to the next.
                </Typography>
                <Typography sx={{
                    color: "black",
                    fontFamily: "Poppins",
                    fontSize: "1em",
                    marginTop: "30px",
                    width: isMobileScreen ? "100%" : "90%",
                    fontWeight: "light",
                    marginBottom: "20px"
                }}>
                    We listened to customers to learn how they were being let down and set with the mission of doing something different. We are proud to not only offer every type of digital advertising service, but to provide near-instantaneous solutions for many of the hurdles slowing your advancement in the digital world.
                </Typography>

                <Link to="/about">
                    <button>Read More</button>
                </Link>
            </Box>
            {!isMobileScreen && <Box sx={{
                flex: 1
            }}>
                <img style={{
                    width: "30vw"
                }} src={salesPersonImg} alt='salesPersonImg' loading='lazy' />
            </Box>}
        </Box>
    );
}

export default HomeAboutUs;
