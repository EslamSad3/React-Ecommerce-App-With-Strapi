import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
// import required modules
import { Pagination } from "swiper/modules";

import { useTheme } from "@emotion/react";
import IconsSection from "./IconsSection";

const mySlider = [
  { text: "MEN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
];
function Hero() {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          pt: 2,
          mt: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Swiper
          loop={true}
          autoplay={true}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          sx={{ position: "relative" }}
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide className="parent-swiper">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      top: "35%",
                      left: "10%",
                      textAlign: "left",
                      color:"#000"
                    },
                    [theme.breakpoints.down("sm")]: {
                      py: 4,
                      textAlign: "left",
                    },
                  }}
                >
                  <Typography sx={{ color: "#222" }} variant="h5">
                    LIFE STYLE COLLECTION
                  </Typography>
                  <Typography
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                    variant="h3"
                  >
                    {item.text}
                  </Typography>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Typography color={"#333"} mr={1} variant="h4">
                      {" "}
                      SALE UP TO
                    </Typography>
                    <Typography color={"#D23F57"} variant="h4">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography>
                    Get Free Shipping On Orders over $99.00
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      color: "#fff",
                      borderRadius: "5px",
                      "&:hover": {
                        backgroundColor: "#151515",
                      },
                    }}
                  >
                    Shop Now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
            minWidth: "26%",
          }}
        >
          <Box sx={{ position: "relative", mb: 2, mt: 1 }}>
            <img width={"100%"} src="src\images\banner-17.jpg" alt="" />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 25,
                color:"#000"
              }}
            >
              <Typography>New Arrival</Typography>
              <Typography>Summer</Typography>
              <Link
                sx={{
                  color: "#2b3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  fontSize: "13px",
                  "&:hover": { color: "#D23F57", cursor: "pointer" },
                  textDecoration: "none",
                }}
              >
                Shop Now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" ,color:"#000"}}>
            <img width={"100%"} src="src\images\banner-16.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 25,
              }}
            >
              <Typography>
                Gamming 4K
              </Typography>
              <Typography>Summer Sale 20% OFF</Typography>
              <Link
                sx={{
                  color: "#2b3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  fontSize: "13px",
                  "&:hover": { color: "#D23F57", cursor: "pointer" },
                  textDecoration: "none",
                }}
              >
                Shop Now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <IconsSection />
    </Container>
  );
}

export default Hero;
