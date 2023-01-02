import React, { useState } from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

//component
import { CoverCard } from "../components";

//data
import { coverData } from "../utils";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Home = () => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Stack spacing="20px">
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>Test Component</Typography>
        </Box>
        <Box>
          <Grid container spacing="10px">
            {coverData.map((item, index) => {
              return (
                <Grid item key={index} xs={3}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CoverCard cover={item.img} title={item.title} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
