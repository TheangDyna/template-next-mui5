import React, { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// icon
import { InfoRounded } from "@mui/icons-material";

const UseStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 300,
  },
  cover: {
    width: "100%",
    height: 200,
    display: "flex",
    marginBottom: "auto",
  },
}));

const CoverCard = ({ cover, title }) => {
  const classes = UseStyles();
  return (
    <Box className={classes.root}>
      <Card>
        <Box
          className={classes.cover}
          sx={{
            background: `center / cover no-repeat url(${cover})`,
          }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "50px",
              background: "rgba(0,0,0,0.5)",
              mt: "auto",
              px: "20px",
              alignItems: "center",
            }}>
            <Typography color="#fff">{title}</Typography>
            <Box flex={1} />
            <InfoRounded sx={{ color: "#fff" }} />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default CoverCard;
