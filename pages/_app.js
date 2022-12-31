import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { ContextProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
