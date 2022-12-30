import React, { useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Home = () => {
  const classes = UseStyles();
  return <Box className={classes.root}>Home Page</Box>;
};

export default Home;
