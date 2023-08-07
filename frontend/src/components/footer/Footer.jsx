import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        textAlign: "center",
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        fontSize={"25px"}
      >
        Designed And Developed By
        <Button sx={{
            mx:1,
            fontSize:"25px",
            textTransform:"capitalize",
            color:"#ff7790"
        }}>Eslam Saad</Button>
        @2023
      </Typography>
    </Box>
  );
}

export default Footer;
