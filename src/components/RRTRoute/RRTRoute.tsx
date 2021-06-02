import { Redirect, Route, RouteProps } from "react-router";
import { ComponentType, createElement } from "react";
import { Location } from "history";
import RenderChildren from "components/RenderChildren/RenderChildren";
import { generalRoutes } from "constants/generalRoutes";

type RRTRouteProps = RouteProps & {
  layout?: ComponentType<any>;
  privateRoute?: boolean;
};

const RRTRoute = (props: RRTRouteProps) => {
  const {
    layout = RenderChildren,
    component,
    render,
    children,
    privateRoute,
    ...restProps
  } = props;

  const auth = { isAuthenticated: true };

  return (
    <Route
      {...restProps}
      render={(matchProps) => {
        const location = matchProps.location as Location<{
          from?: string;
          nextRoute?: string;
        }>;
        if (privateRoute && !auth.isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: generalRoutes.HOME,
                state: {
                  from: location.state?.nextRoute || location.pathname,
                },
              }}
            />
          );
        }
        if (render) {
          return createElement(layout, matchProps, render(matchProps));
        }
        return createElement(
          layout,
          matchProps,
          component ? createElement(component, matchProps) : children,
        );
      }}
    />
  );
};

export default RRTRoute;
