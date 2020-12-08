import { Route, Redirect } from "react-router-dom";
import AuthContext from "../contexts/auth";

function PrivateRoute({ children, ...rest }) {
  return (
    <AuthContext.Consumer>
      {({ user }) => {
        if (user) {
          return <Route {...rest}>{children}</Route>;
        }
        return (
          <Route
            {...rest}
            render={({ location }) => (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location },
                }}
              />
            )}
          />
        );
      }}
    </AuthContext.Consumer>
  );
}

export default PrivateRoute;
