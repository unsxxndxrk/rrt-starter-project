import React from "react";
import { Route, Switch } from "react-router";
import GeneralRoutes from "./constants/generalRoutes";
import HomePage from "./pages/General/HomePage/HomePage";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AboutPage from "./pages/General/AboutPage/AboutPage";
import NotFoundPage from "./pages/Common/NotFoundPage/NotFoundPage";
import ExamplesPage from "./pages/General/ExamplesPage/ExamplesPage";

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path={GeneralRoutes.HOME}
        component={() => <MainLayout children={<HomePage />} />}
      />
      <Route
        exact
        path={GeneralRoutes.EXAMPLES}
        component={() => <MainLayout children={<ExamplesPage />} />}
      />
      <Route
        exact
        path={GeneralRoutes.ABOUT}
        component={() => <MainLayout children={<AboutPage />} />}
      />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
