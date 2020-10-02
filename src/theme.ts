import { createMuiTheme } from "@material-ui/core";

export const appTheme = createMuiTheme({
  typography: {
    fontFamily: [
      "CircularStd",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    fontSize: 13,
    h1: {
      fontSize: "45px",
      lineHeight: "45px",
      fontWeight: 900,
      color: "#444444",
    },
    h2: {
      fontSize: "35px",
      lineHeight: "35px",
      fontWeight: 500,
      color: "#444444",
    },
    h3: {
      fontSize: "25px",
      lineHeight: "25px",
      fontWeight: 300,
      color: "#444444",
    },
  },
  palette: {
    primary: {
      main: "#547AD0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ff5252",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#444444",
      secondary: "#fafafa",
    },
  },
});
