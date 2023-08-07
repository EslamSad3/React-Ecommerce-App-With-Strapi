import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlined from "@mui/icons-material/KeyboardArrowRightOutlined";
import ElectricBikeOutlinedIcon from "@mui/icons-material/ElectricBikeOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import { Close } from "@mui/icons-material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";

function HeaderThree() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        
      }}
    >
      <Box>
        <Button
          sx={{
            width: "222px",
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.primary,
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <WindowIcon />
          <Typography sx={{ padding: "0", mx: 1, textTransform: "capitalize" }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: "222px",
              bgcolor: theme.palette.myColor.main,
              color: theme.palette.text.primary,
            },
          }}
        >
          <MenuItem
            onClick={handleClose}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              px: 2,
            }}
          >
            <ElectricBikeOutlinedIcon />
            <Typography>Bikes</Typography>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              px: 2,
            }}
          >
            <LaptopChromebookOutlinedIcon />
            <Typography>Electronics</Typography>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              px: 2,
            }}
          >
            <MenuBookOutlinedIcon />
            <Typography>Books</Typography>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              px: 2,
            }}
          >
            <SportsEsportsOutlinedIcon />
            <Typography>Games</Typography>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1001px)") && (
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={3}
          sx={{ textAlign: "center", zIndex: 9, mr: 10, mt: 2 }}
        >
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}
      {useMediaQuery("(max-width:1000px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root": { height: "100%" } }}
      >
        <Box
          sx={{
            width: 400,
            mx: "auto",
            mt: 5,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <IconButton
            sx={{
              transition: "0.2s ease",
              "&:hover": { rotate: "180deg", bgcolor: "inherit", color: "red" },
            }}
          >
            <Close onClick={toggleDrawer("top", false)} />
          </IconButton>

          {["Home", "Categories", "Account", "Cart", "LogOut"].map(
            (item, index) => {
              return (
                <>
                  <Accordion
                    elevation={0}
                    sx={{ bgcolor: "inherit" }}
                    key={index}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{item}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="Trash" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Spam" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </>
              );
            }
          )}
        </Box>
      </Drawer>
    </Container>
  );
}

export default HeaderThree;
