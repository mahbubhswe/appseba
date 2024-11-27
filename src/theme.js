import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#CC2D3C",
    },
    secondary: {
      main: "#CC2D3C",
    },
    error: {
      main: red.A400,
    },
    customPrimary: {
      main: "#CC2D3C",
    },
  },
});

export default theme;
