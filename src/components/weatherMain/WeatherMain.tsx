import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const WeatherMain = () => {
  return (
    <Box>
      <Typography
        fontSize={"xx-large"}
        marginBottom={"1rem"}
        fontFamily={"Raleway"}
        textAlign={"center"}
      >
        Weather App
      </Typography>
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
