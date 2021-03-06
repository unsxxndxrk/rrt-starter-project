import { Routes } from "Routes";
import { appTheme } from "theme";
import { appHistory } from "appHistory";
import { store } from "store";
import AppProviders from "AppProviders";

function App() {
  return (
    <AppProviders theme={appTheme} history={appHistory} store={store}>
      <Routes />
    </AppProviders>
  );
}

export default App;
