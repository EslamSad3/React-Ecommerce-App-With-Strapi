import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import {
  Container,
  IconButton,
  InputBase,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";

const options = ["All Categories", "Clothes", "Cars", "Smart Phones"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "260px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "320px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(3),
    display: "none",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
function HeaderTow() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container sx={{ my: 2, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="body2">E-Commerce</Typography>
      </Stack>
      <Search
        sx={{
          borderRadius: "25px",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" />
        <List
          component="nav"
          aria-label="Device settings"
          sx={{
            bgcolor: theme.palette.myColor.main,
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
            p: 0,
          }}
        >
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              secondary={options[selectedIndex]}
              sx={{
                width: "100px",
                textAlign: "center",
                "&:hover": { cursor: "pointer" },
              }}
            />
            <ExpandMore
              sx={{ fontSize: "13px", color: theme.palette.text.primary }}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              sx={{ fontSize: "12px" }}
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <IconButton>
          <Person2OutlinedIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}

export default HeaderTow;
