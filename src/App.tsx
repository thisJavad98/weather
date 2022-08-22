import { Paper } from "@mui/material";
import React from "react";
import { prefixer } from "stylis";
import WeatherContent from "./components/weatherContent/WeatherContent";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { createTheme, CssBaseline, ThemeProvider, Box } from "@mui/material";

function App() {
  
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <ToastContainer /> */}
      <Box sx={{ height: "100vh", width: "100vw" }}>
        <WeatherContent />
      </Box>
    </ThemeProvider>
  );
}

export default App;
