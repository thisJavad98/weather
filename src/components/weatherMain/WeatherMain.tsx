import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const WeatherMain = () => {
  return (
    <Box>
      <Grid
        marginBottom={"1rem"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          fontSize={"xx-large"}
          fontFamily={"Raleway"}
          fontWeight={"700"}
          marginRight={"20px"}
        >
          Weather App
        </Typography>
        <img
          width={"40"}
          src="data:image/png;base64,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"
        ></img>
      </Grid>
      <Box
        width={"35rem"}
        height={"38rem"}
        borderRadius={2}
        bgcolor={"#F0F0F0"}
      ></Box>
    </Box>
  );
};

export default WeatherMain;
