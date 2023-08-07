import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "../products/ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
import CircularProgress from "@mui/material/CircularProgress";
function Home() {
  const [open, setOpen] = useState(false);
  const [clickedProduct, setclickedProduct] = useState({})
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  const [alignment, setAlignment] = useState("left");
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const allData = "products?populate=*";
  const menData = "products?populate=*&filters[category][$eq]=men";
  const womenData = "products?populate=*&filters[category][$eq]=women";
  const [myData, setmyData] = useState(allData);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  const filterData = () => {
    setmyData(allData);
  };
  const filterDataMen = () => {
    setmyData(menData);
  };
  const filterDataWomen = () => {
    setmyData(womenData);
  };

  if (error) {
    return (
      <Container
        sx={{ display: "flex", justifyContent: "center", my: 20, py: 20 }}
      >
        <Typography variant="h6">No Internet Connection</Typography>
      </Container>
    );
  } else if (isLoading) {
    return (
      <Container
        sx={{ display: "flex", justifyContent: "center", my: 10, py: 10 }}
      >
        <CircularProgress />
      </Container>
    );
  } else {
    return (
      <Container sx={{ py: 3 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box flexGrow={1}>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All Our New Arrivals In a Exclusive Brand Selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            color="error"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              gap: 2,
              ".Mui-selected": {
                border: "1px solid rgba(233,69,96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              className="toggle-button"
              value="left"
              aria-label="left aligned"
              sx={{ color: theme.palette.text.primary }}
              onClick={() => filterData()}
            >
              All Products
            </ToggleButton>
            <ToggleButton
              className="toggle-button"
              value="center"
              aria-label="centered"
              sx={{ color: theme.palette.text.primary }}
              onClick={() => filterDataMen()}
            >
              MEN Category
            </ToggleButton>
            <ToggleButton
              className="toggle-button"
              value="right"
              aria-label="right aligned"
              sx={{ color: theme.palette.text.primary }}
              onClick={() => filterDataWomen()}
            >
              WOMEN Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          flexWrap={"wrap"}
          sx={{
            [theme.breakpoints.down("sm")]: {
              justifyContent: "center",
            },
            [theme.breakpoints.up("sm")]: {
              justifyContent: "space-between",
            },
          }}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 250,
                  mt: 5,

                  ":hover .MuiCardMedia-root": {
                    scale: "1.01",
                    transition: "0.2s ease-in-out",
                    rotate: "1deg",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 250, width: 250 }}
                  title="green iguana"
                  image={`${item.attributes.productimgs.data[0].attributes.url}`}
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      gutterBottom
                      component="div"
                      className="pro-title"
                    >
                      {item.attributes.producttitle}
                    </Typography>
                    <Typography gutterBottom component="div">
                      {`$${item.attributes.productPrice}`}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Stack width={"100%"} direction={"row"} alignItems={"center"}>
                    <Box flexGrow={1}>
                      <Button
                        sx={{ textTransform: "capitalize" }}
                        size="small"
                        onClick={()=>{
                          handleClickOpen()
                          setclickedProduct(item)
                        }}
                      >
                        <AddShoppingCartOutlinedIcon
                          fontSize="small"
                          sx={{ mr: 1 }}
                        />
                        Add To Cart
                      </Button>
                    </Box>

                    <Rating
                      name="read-only"
                      value={item.attributes.rating}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            ".MuiPaper-root": {
              minWidth: { sx: "100%", md: 800 },
            },
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              transition: "0.2s ease",
              "&:hover": {
                rotate: "180deg",
                bgcolor: "initial",
                color: "red",
                borderRadius: "50%",
              },
            }}
          >
            <Close onClick={handleClose} />
          </IconButton>
          <ProductDetails item={clickedProduct}/>
        </Dialog>
      </Container>
    );
  }
}

export default Home;
