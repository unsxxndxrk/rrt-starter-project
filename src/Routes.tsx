import { Route, Switch } from "react-router";
import { generalRoutes } from "constants/generalRoutes";
import HomePage from "pages/Home/HomePage";
import About from "pages/About/About";
import NotFoundPage from "pages/NotFound/NotFoundPage";
import Examples from "pages/Examples/Examples";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={generalRoutes.HOME} component={HomePage} />
      <Route exact path={generalRoutes.EXAMPLES} component={Examples} />
      <Route exact path={generalRoutes.ABOUT} component={About} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
