import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
function ProductDetails({ item }) {
  console.log(item);
  return (
    <Stack
      direction={{ sx: "column", sm: "row" }}
      alignItems={"center"}
      gap={4}
    >
      <Box display={"flex"}>
        <img
          width={300}
          height={"100%"}
          src={item.attributes.productimgs.data[0].attributes.url}
          alt=""
        />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">{item.attributes.producttitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h5">
          ${item.attributes.productPrice}
        </Typography>
        <Typography variant="body1">
          {item.attributes.productDescription}
        </Typography>
        <Stack
          direction={"row"}
          gap={1}
          mt={2}
          justifyContent={{ xs: "center", sm: "flex-start" }}
        >
          {item.attributes.productimgs.data.map(pic => {
           return  <img width={75} src={pic.attributes.url} alt=""/>;
            
          })}
          {/* <img width={75} src="src/images/1.jpg" alt="" />
          <img width={75} src="src/images/1.jpg" alt="" />
          <img width={75} src="src/images/1.jpg" alt="" /> */}
        </Stack>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", mt: 3, mb: { xs: 2 } }}
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
