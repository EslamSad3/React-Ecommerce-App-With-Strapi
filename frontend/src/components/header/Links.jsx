import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";

function Links({title}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        ":hover .show-on-hover": { display: "block" },
        ":hover": { cursor: "pointer" },
      }}
    >
      <Typography>{title}</Typography>
      <ExpandMoreIcon />

      <Box
        className="show-on-hover"
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: "170px",
          display: "none",
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.2 }}>
                  <ListItemText
                    primary="Trash"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{
                  position: "relative",
                  ":hover .sub-link": { display: "block" },
                  ":hover": { cursor: "pointer" },
                }}
              >
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.2 }}>
                  <ListItemText
                    primary="Products"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>

                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "100%",
                    display: "none",
                  }}
                  className="sub-link"
                >
                  <Paper sx={{ ml: 1, minWidth: "150px" }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="Add Products" />
                          </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Edit Products" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.2 }}>
                  <ListItemText
                    primary="Trash"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.2 }}>
                  <ListItemText
                    primary="Trash"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}

export default Links;
