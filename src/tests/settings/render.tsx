import React from "react";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { Queries } from "@testing-library/dom";
import { configureStore, StoreInitialState } from "store";
import AppProviders from "AppProviders";
import { StylesOptions, StylesProvider } from "@material-ui/styles";
import { appTheme } from "theme";
import { appHistory } from "appHistory";

type ExtendedOptions<Q extends Queries> = RenderOptions<Q> & {
  initialState?: StoreInitialState;
  store?: ReturnType<typeof configureStore>;
};

const generateClassName: StylesOptions["generateClassName"] = (
  rule,
  sheet,
): string => `${sheet!.options.classNamePrefix}-${rule.key}`;

function render<Q extends Queries>(
  ui: React.ReactElement,
  {
    initialState,
    store = configureStore({ initialState }),
    ...otherOptions
  }: ExtendedOptions<Q> & {
    initialState?: StoreInitialState;
    store?: ReturnType<typeof configureStore>;
  } = {},
): RenderResult<Q, HTMLElement> {
  const Wrapper: React.FunctionComponent = ({ children }) => {
    return (
      <StylesProvider generateClassName={generateClassName}>
        <AppProviders theme={appTheme} history={appHistory} store={store}>
          {children}
        </AppProviders>
      </StylesProvider>
    );
  };
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...otherOptions }),
    store,
  };
}

export { render };
