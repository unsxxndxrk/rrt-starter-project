import { Route, Switch } from "react-router";
import { generalRoutes } from "constants/generalRoutes";
import { Home } from "pages/Home/Home";
import { About } from "pages/About/About";
import { NotFound } from "pages/NotFound/NotFound";
import { Examples } from "pages/Examples/Examples";

function Routes() {
  return (
    <Switch>
      <Route exact path={generalRoutes.HOME} component={Home} />
      <Route exact path={generalRoutes.EXAMPLES} component={Examples} />
      <Route exact path={generalRoutes.ABOUT} component={About} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export { Routes };
