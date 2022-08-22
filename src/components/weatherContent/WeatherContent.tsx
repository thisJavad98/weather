import { Card, Grid, Paper, Theme as MuiTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import WeatherMain from "../weatherMain/WeatherMain";

const useStyles = makeStyles((theme: MuiTheme) => ({}));

const WeatherContent = () => {
  const classes = useStyles();

  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <Grid
        height={"100%"}
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row"}
      >
        <Grid
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
        >
          <WeatherMain />
        </Grid>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
          width={"80%"}
        >
          <img height={"70%"} src={"/assets/svg/Weather2.svg"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherContent;
