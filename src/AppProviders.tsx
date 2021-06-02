import { Router, RouterProps } from "react-router";
import { Provider } from "react-redux";
import { RootState } from "store";
import React from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { DefaultTheme } from "@material-ui/styles";
import { Store } from "redux";

type AppProvidersProps = {
  children: React.ReactNode;
  theme: DefaultTheme;
  history: RouterProps["history"];
  store: Store<RootState>;
};

const AppProviders = (props: AppProvidersProps) => {
  const { children, theme, history, store } = props;

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>{children}</Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default AppProviders;
