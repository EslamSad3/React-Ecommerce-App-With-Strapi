import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
function ProductDetails({ item }) {
  const [selectedImage, setselectedImage] = useState(0);
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
          src={item.attributes.productimgs.data[selectedImage].attributes.url}
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
          <ToggleButtonGroup
            value={selectedImage}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !imporatant",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {item.attributes.productimgs.data.map((pic, index) => {
              return (
                <ToggleButton
                  value={index}
                  aria-label="left aligned"
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0",
                    opacity: "0.5",
                  }}
                >
                  <img
                    onClick={() => setselectedImage(index)}
                    width={"100%"}
                    height={"100%"}
                    src={pic.attributes.url}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
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
