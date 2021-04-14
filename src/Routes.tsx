import { Route, Switch } from "react-router";
import GeneralRoutes from "constants/generalRoutes";
import HomePage from "pages/General/HomePage/HomePage";
import AboutPage from "pages/General/AboutPage/AboutPage";
import NotFoundPage from "pages/Common/NotFoundPage/NotFoundPage";
import ExamplesPage from "pages/General/ExamplesPage/ExamplesPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={GeneralRoutes.HOME} component={HomePage} />
      <Route exact path={GeneralRoutes.EXAMPLES} component={ExamplesPage} />
      <Route exact path={GeneralRoutes.ABOUT} component={AboutPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
