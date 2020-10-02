import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Routes from "./Routes";
import { appTheme } from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router } from "react-router-dom";
import { appHistory } from "./appHistory";

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      <Router history={appHistory}>
        <Routes />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;