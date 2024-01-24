import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const HomePortfolio = () => {
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  return (
    <Box>
      <Box className="backgroundImagePortfolio">
        <Box
          className="portfolioOverlay"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: isMobileScreen ? "20px" : "50px",
            flexDirection: isMobileScreen ? "column" : "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: isMobileScreen ? "100%" : "20%",
            }}
          >
            <Box
              sx={{
                width: isMobileScreen ? "70px" : "100px",
                height: isMobileScreen ? "70px" : "100px",
                outline: "solid 2px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: isMobileScreen ? "30px" : "50px",
                }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtUlEQVR4nO1ZzW9VRRSfCrWCggnoAuhGozHgTiBYWaiJgAm61rAgLjSwZAsbAzEWCH8AC0x0hQlJJcaQuDAlfHRJhKJGJdVNaWpfen/nzL2mttZDzuuZ9vm++t699713SfpLJrmZj985Z+bOOWdmnFvDGtbQMjxw2xNJRwtw03UKHVeelkoq5UTkSQ+cY+BhoxnJJKAF+Cp+lV2pCwOTnmhYda03+GyDJb1RFAP8Svm8ZrBZJ0Q01KqAThtQDSJ6I6xEKuV6bUDTPo+9AQz8rQ0isiGLgCzwq/BPTU09bX3imkYm+tP2wMtpBXRhD7xiff6oHQxc1caY6GhaAV0w4CPzjN/UNDJw3Hb4tbQCssKvws9E35uOx2oaiWir/lsM/JcAu9MIyArfhD8B9qpunsgD2NKIoBzMmOiOiAy0IyAP+Ab86liY6G7DIPa/XQ78Zh2viEh/KwLygq/DbynOiP37v8rk5MbmJN6/6okiW4kfkiTZ0SsDklJpkIlGrX6WmXe1RJQAeyqSOugGF5E+BuYsVjyVt/IissE26JyIPGFOBSF1iKPotbYI4zjepu6qMitlokS/kyTZnrcBSak0GIKUB25VyB1RXVITE9H7IchVkB7IVXvnXAy8W506N4tJbaFUKm32wPUK8k9dzvBEp5f5iUZVZq4Cyq4MGDcBP+ZK7sqB9J5NznizfCwTNMAxsGg50768eIloyJRfbBREc4MHvmiYj6TnvGqcl1ynoR6o7CmWBL6Tlc8DB4L3yeRt2gEDp0zo7zMzM5syOQeiB/b7nHTdgois98CYbejLGuRScPQx0de2kmMiss51EwBe8kRsCpxvdzwDF2wVWblcLxADhxiYN0XOtLIS2scTfWa/zXwMHHS9hAeOMLBgCn3ZzIdbLPnK+i544ENXBBDReyFPYuB+vRhBRK974KfgcYjosCsSNNUNhw47OV0MbfptdeUozsw7XREhIv2e6EQwItQH5bWt+pBUSNTccXb4IJQrNLCFg0moY+AfrZuenn7GFR0+it622PDzch3wS9ko5jddkSFLEfp69e2B3umHPF/7uCICwIse+M5m/y9mfi60MfPzWmdt30ZR9IIrAkRkgKPoE511Bv4Ntwf13hiYef/ybYf21THMH9e7f+oK7Ji5/OinG1UTu2azq6ukfcKm9nZZkCWjTQ19TzMlJjzwwezs7LOtjtW+mkbwymXBsOs29Iq7LDyK3srssYgmXLdREV0zF66I2l1DkxfE9gtWXkLX4B4zPAI4OctTUFfxggAAAABJRU5ErkJggg=="
              ></img>
            </Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: "24px",
                margin: isMobileScreen ? "5px 0px" : "10px 0px",
              }}
            >
              Industry Experts
            </Typography>
            <Typography
              sx={{
                fontSize: isMobileScreen ? "14px" : "16px",
                textAlign: "center",
                width: isMobileScreen ? "90%" : "100%",
                fontFamily: "Poppins",
              }}
            >
              Our team shares over 35 years of shared experience in the
              marketing industry. Our veterans know how to overcome any hurdle,
              no matter the industry.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: isMobileScreen ? "100%" : "20%",
             
            }}
          >
            <Box
              sx={{
                width: "100px",
                height: "100px",
                outline: "solid 2px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: isMobileScreen ? "70px" : "100px",
                height: isMobileScreen ? "70px" : "100px",
              }}
            >
              <img
                style={{
                  width: isMobileScreen ? "30px" : "50px",
                }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAErUlEQVR4nO1aWYgcVRR9cd83NIoGBAWD+4IgKGLQuIIfBtGfKCiC0ShRiELAZYwfCiIYEcUPFQXBuCC4gP7ELRp/3HAJSjSijpNxOl3n3Fs9UZz45Hbfamra6Z6luio94IH+mK7q+9559767TgizgJAblIyVfICPQlmojARbn9KJlLaA438iM4UA/9hpxRgXhJIQY1xga9haZa1hl/1XWyRNkjPLWoPkOW5aW8vUyDr3KB/GGPfpt/yxsbEDhfzSiTwcyoKIHCHAcFP15Ocicl6/ZGuSLBHga5f9c5Ikh4QyISInKrkls2MhX2w0GsfMVV6jVlsk5Es5t/sTycWhCsTh4f2UHBJg3E+wYX/PxtxijHsquUpJ8UP5y0zXzCtUjeZpAi9kp2nOICWvn+53CixV4LtcFH8TwHHV7Ho6+ya/yhHaoPX6aZ3vATjeNp0j8ENKXhEGCTHGPRS4Tcntbip/C/lEmiRnqOop5oUE+NNJMCVXxxj3CoMKbdl9zxyK5JVh0KHkU9MREWBFmC9EZIrN9no2cFByyC/yczHG3Sa5bGBjk0iSLAuDDlU91S56D7MardVqB4X5AEmSZQp8P1XVN5VbHmg0gLObKYxF7Fbknx8m1QkF3nBNWCpziwfKL8qsZfoOC4JehBHAYRb4LKOdNzEkgwKvuzYezH13u2vls3mhFVU9WYCdSqZWv2TfW2YswG/NChO4LAw6lHzVtfHQFM/udO+1KQwyROSkTBuqurDzuWvl9yaZJLkoDCqEXO9B75Fu75C8y7WyMexqNGq1RZokFwpwswCPKvCW1RYeN8bTND2q229HRkb2V+APN78fhXzHKkMBblXg4vF6/dhSnIEJFZGbrK62hkPTbLqnH0bk3ulk+gFM9JCzwwu1V0jeEGPcvTCRtilMTjVqdmEFeF6AexS4Nk2Ss2ZTb1sSmdbrp0uSXC3AGgWeNXOzXOw/xMjHCxOxDfsprbHmmQW4UDLq9frBnuKscDLbCwtV4DXXwiel95o6ICJ3ZxYQisIun13KXFOuHeTKhAD3uyXsJHljX4SaFxLgGz+dzUUacjOBkmudxIRd9v4KV12Y68tutdZOKR4SeCzrwii5PJQBAIcq8Kmb2S8kT+iXbHOxCjzT7jqKXBXK9igKfOwLbutHxWckso6lkI0UuCRUgdHR0QPag1GgVrTdmaU2SoqIXBCqRIxx35wDuKaIrKwUTqvSRCfaDYaC5mXFlmfES0LV8JR8wrxLjHHvIrIs1XHNrgxVw+aIvvi3hWWRq/2OPNmf3c1u8evcy6wvLAu41A/lg1A1bEzgLvi+nrGBXG5NiEajcXS39+xZ35LD2aJZTHVpulmEtrZPLhOIPht5WlWP7CKv1vRcPYqyUpDrU00aXNoEqu2FsioQeDv7ZwOfGT5ggbWDyPtuXksrI9Gch7eqwR1Z9UbyXCHfy88TbeiTeTRz0Uq+nCNok62hrKFt0y1tfb9qV3iszSJyvpDv5rvtSt7RbcJr79ulzr2/zTZvd01bf6+rjIiIHJ6NpnOfulWR1lyYiQxrNGQJaEcZvbJ8Bjmk5OVmSt6QWDvX6tGcgmtoi6XwNn+fy4b+BUjmhoeHWRqbAAAAAElFTkSuQmCC"
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: "24px",
                margin: isMobileScreen ? "5px 0px " : "10px 0px",
              }}
            >
              Quality Guaranteed
            </Typography>
            <Typography
              sx={{
                fontSize: isMobileScreen ? "14px" : "16px",
                textAlign: "center",
                width: isMobileScreen ? "90%" : "100%",
                fontFamily: "Poppins",
              }}
            >
              Our company is only as good as our most recent successes. We are
              dedicated to delivering outstanding results for every client
              whether you're a mom and pop store or a Fortune 500 company.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: isMobileScreen ? "100%" : "20%",
            }}
          >
            <Box
              sx={{
                width: "100px",
                height: "100px",
                outline: "solid 2px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: isMobileScreen ? "70px" : "100px",
                height: isMobileScreen ? "70px" : "100px",
              }}
            >
              <img
                style={{
                  width: isMobileScreen ? "30px" : "50px",
                }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFT0lEQVR4nM1aWYgdVRBtE5W4oXENrolxAVcQxQ8XUBEVRVQQVFREEBQRFaISFPVDxSQG0bhi8MNdEPwwksXdIEYz40cwiRoNbuM4zkzfc+q+N5qouVI91ZM2zPR7/V73TB94P4+691bdW3XrVN2OoilACGFnETlbRO4W4GUh3/fAek8OezKkPyF/InlMVDc452Z78mkPDGYVzvs1yOujuiCEMN2TDwuwZWy3gXWefMYDt5G8WESO894fOBLHh3tgjZ1Ib39//x5RHTAwMLCnkCtN+REBFpM8ejzZOI73zhjRA2BmVAcksUCuMiO+BnDURLK1NUIh5FOJKwEbSO4XtWfE2noZIXKGANv0JipwEr0A9o3qBN1ZO41r8uInNcKTXzjn9onqhIZzp6Q3Uwhh2oRy5Dwzdo2eTFQ36FVrOWBerhyw1OQu6mSdEMIu3rlzK4spIZcnO+39iblywEt2IucXXSP09e0u5AcWW19GVcAD3+gCGgO5cuTzKkfy0iLzhxB2S2jNdgYw3LXSEyi4WYB/Qgg75ckJ8Lgpcm1BI96zk0w2TIDfS1F8HAXX2U5PmDsUnrzTFLm3gBGr0gSrDMFc65fSlN9BwbeSBUTOzJNTl7KdfbGIER7Y4L0/SEQOSE8mqgKevN0WWJAnl9nRtXlyIYQZQq6wOTc2Go1ZNv5YG/9RVAVGhocPE+BfAfpbBbyQP5qC64V8RYAHNGZIXqJXa1K3bDfi22azeXA61jt3jhnyaiWGmIKvWSA/mCfnnTvPk5ta1ibAd81m85Ds2AZ5ncXLY5UZ0gAusEX+bidPjMTxETpGgFssoT4n5OvJhgALU3ca79YjeWMlRjSBUz3wR2ZHY6UtZa8jZI8l3uPLnjt1FVHmS/IuARalSatMY5xzs3UNjbFW+aowPHClAH+pO5G8YZzEV5oxHlhYSXwIcLNmcy1nx6McZRrjnJvjyYZumt6QXSm+g5L3m5JORM7KkevamIHRHkBvO3mqbWitIeQSO+LffByf1GpMxphY80SR9RqNxiwPfG5GfKo0PuoWIYRd9Xo0pTYBOLLdserX6dUswHzN3C2NAC5UTpVWk6WUxP9r8ZBfKe9pd6zeMB54YYeO4s8C3Kcnmt1lTYCaIzzwcUb2DeVdXRshIvvrjqQcp2iJKsATKd3QeFKCaU2KtHG3zQND2Wae/b4X566IyoB1ATeaIm+34xJZePIRU2pzc2jo0PR/AHPVxYRcbtwrVmNsw55VZpBX+xeCtjTHfBRYqm3QgkbcYTv+q16f0VSgCZyWNp7VNYpmUg9crWzYk2jE8cnVaVqAcnQy3rL9SKtCqzJoc02ArZqxO2GYyUmSPsn4IpdHUwEP3JoUR2RT2/5Fx2v1J8CAnWQ1NLsVBLgnQzkKu4Pe/2nl14k7lvUgk/SaBOjz3p9QdA7NuNrhsDkWR5ONMEo53rST+CGvg54zxwwPrE7r6NLu/nahtCBDOXr0CayDOaaNtYHIFaUQuqLw5KOW6FYPDg7u1WHZ+WS6EZ3O0RWSwAS2KiXItlqKQAM6dckiBLJUCDC/nSeAFrlGid7glL6Je2CZGlKknhgbqw00YIvlmtOr0bBNKMPUxFf0htGrOckzo1n7smiqIdYYLlJxKZ1XFpsEt3M3RXWAJx8q8qmEPnPZdyMt26GTCufcnKStOZoEZ7aR8D5Ja5KobvDAAssBH070RGwn8Y4ZsUy/aojqhhDCdAHeTTsiHrgqfQ7QFow2ljPV4We1+dBlwu9GgEV6C6VNAAH+zDQFlNIvKaWDMRkAMFddTTskSjfU3TSoO8kzk4n/ALZ+f67JnVAoAAAAAElFTkSuQmCC"
              ></img>
            </Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: "24px",
                margin: isMobileScreen ? "5px 0px" : "10px 0px",
              }}
            >
              Ongoing Support
            </Typography>
            <Typography
              sx={{
                fontSize: isMobileScreen ? "14px" : "16px",
                textAlign: "center",
                width: isMobileScreen ? "90%" : "100%",
                fontFamily: "Poppins",
              }}
            >
              When you work with us, you're part of the family. Our experts will be on standby every day to work with you and answer all of your questions and concerns. You always get the last say with your campaign.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "rgb(121, 140, 252)",
          height: "15vh",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box 
          sx={{
            background: "white",
            width: isMobileScreen ? "100%" : "80%",
            position: "absolute",
            top: -40,
            padding: "20px",
            borderRadius: "5px",
            display: "flex",
            height: isMobileScreen ? "30vh" : "20vh",
            justifyContent: "center",
            alignItems: "center",
            gap: isMobileScreen ? "10px" : "40px",
            flexDirection: isMobileScreen ? "column" : "row",
            boxShadow: "-1px 9px 11px -6px rgba(61,61,61,0.59)"
          }}
        >
          <Box >
            <Typography
              sx={{
                color: "black",
                fontSize: isMobileScreen ? "1.2em" : "1.7em",
                fontWeight: "bolder",
                textAlign: "center",
                fontFamily: "Poppins",
              }}
            >
              Digital Plus will take your business{" "}
              <span
                style={{
                  color: isMobileScreen ? "black" : "rgb(121, 140, 252)",
                  fontSize: isMobileScreen ? ".9em" : "1em",
                  fontWeight: "600",
                }}
              >
                new places
              </span>
              .
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: "1em",
                textAlign: "center",
                fontFamily: "Poppins",
              }}
            >
              Our professionals stop at nothing to provide excellent digital
              marketing solutions. Call us now!
            </Typography>
          </Box>
          <Box>
            <button>Contact Now</button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePortfolio;
