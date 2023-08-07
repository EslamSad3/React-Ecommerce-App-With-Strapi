import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
function Scroll() {
  const tap = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
        onClick={() => tap()}
        size="small"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

export default Scroll;
