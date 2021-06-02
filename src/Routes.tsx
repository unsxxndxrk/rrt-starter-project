import { Switch } from "react-router";
import { generalRoutes } from "constants/generalRoutes";
import Home from "pages/Home/Home";
import About from "pages/About/About";
import NotFound from "pages/NotFound/NotFound";
import Examples from "pages/Examples/Examples";
import MainLayout from "layouts/MainLayout/MainLayout";
import RRTRoute from "components/RRTRoute/RRTRoute";

function Routes() {
  return (
    <Switch>
      <RRTRoute
        exact
        path={generalRoutes.HOME}
        component={Home}
        layout={MainLayout}
      />
      <RRTRoute
        exact
        path={generalRoutes.EXAMPLES}
        component={Examples}
        layout={MainLayout}
      />
      <RRTRoute
        exact
        path={generalRoutes.ABOUT}
        component={About}
        layout={MainLayout}
      />
      <RRTRoute path="*" component={NotFound} />
    </Switch>
  );
}

export { Routes };
