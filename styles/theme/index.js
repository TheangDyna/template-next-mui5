import { createTheme } from "@mui/material";
import typographyTheme from "./Typography.theme";

const theme = createTheme({
  palette: {},
  typography: {},
  components: {
    MuiTypography: typographyTheme,
  },
});
export default theme;
