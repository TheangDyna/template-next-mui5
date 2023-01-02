import { createTheme } from "@mui/material";
import typographyTheme from "./Typography.theme";

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: `"Nunito", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiTypography: typographyTheme,
  },
});
export default theme;
