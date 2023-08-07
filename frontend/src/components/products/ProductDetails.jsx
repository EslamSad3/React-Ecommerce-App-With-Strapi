import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
function ProductDetails() {
  return (
    <Stack
      direction={{ sx: "column", sm: "row" }}
      alignItems={"center"}
      gap={4}
    >
      <Box display={"flex"}>
        <img width={300} height={"100%"} src="src/images/1.jpg" alt="" />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">WOMEN'S FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h5">
          $12.99
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          cupiditate qui blanditiis. Fuga, officiis praesentium aliquid
          dignissimos architecto dolore quo perferendis quasi ut vel quidem
          laborum alias, animi natus voluptatem.
        </Typography>
        <Stack
          direction={"row"}
          gap={1}
          mt={2}
          justifyContent={{ xs: "center" ,sm:"flex-start"}}
        >
          <img width={75} src="src/images/1.jpg" alt="" />
          <img width={75} src="src/images/1.jpg" alt="" />
          <img width={75} src="src/images/1.jpg" alt="" />
        </Stack>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", mt: 3, mb:{xs:2} }}
          size="small"
        >
          <AddShoppingCart fontSize="small" sx={{ mr: 1 }} />
          Buy Now
        </Button>
      </Box>
    </Stack>
  );
}

export default ProductDetails;
