import React, { useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const About = () => {
  const classes = UseStyles();
  return <Box className={classes.root}>About Page</Box>;
};

export default About;
