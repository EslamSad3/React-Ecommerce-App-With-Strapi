import Typography from "@mui/material/Typography";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import { Outlet } from "react-router-dom";
import HeaderOne from "./components/header/HeaderOne";
import HeaderTow from "./components/header/headerTow";
import HeaderThree from "./components/header/headerThree";
import Hero from "./components/hero/Hero";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroll/Scroll";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <HeaderOne />
        <HeaderTow />
        <HeaderThree />
        <Box bgcolor={theme.palette.bg.main}>
          <Hero />
          <Home />
        </Box>
        <Footer />
        <Scroll/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
