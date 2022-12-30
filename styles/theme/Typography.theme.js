const typographyTheme = {
  styleOverrides: {
    root: {
      color: "#000",
      fontSize: 16,
      display: "inline",
      fontFamily: "roboto",
      lineHeight: "25px",
    },
  },
  variants: [
    {
      props: { variant: "title" },
      style: {
        fontWeight: "bold",
      },
    },
    {
      props: { variant: "link" },
      style: {
        color: "#666666",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  ],
};

export default typographyTheme;
