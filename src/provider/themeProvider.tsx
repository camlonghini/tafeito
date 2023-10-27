import { createTheme, ThemeProvider } from "@mui/material/styles";

const font = "'Mulish', sans-serif;"

const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main: "#482880", // Change the primary color
      light: "#eee8f8"
    },
    secondary: {
      main: "#f50057", // Change the secondary color
    },
    // You can customize other colors as well
  },
});

export default theme;
