import { Paper, Theme as MuiTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
/* import image from "../../assets/svg/background.svg" */
const image = require("../../assets/svg/background.svg") as string;

const useStyles = makeStyles((theme: MuiTheme) => ({
  box: {
    backgroundImage: `url(${image})`,
  },
}));

const WeatherContent = () => {
  const classes = useStyles();

  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      javad
    </Box>
  );
};

export default WeatherContent;
