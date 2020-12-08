import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useHistory, useLocation } from "react-router-dom";

import AuthContext from "../contexts/auth";

const { REACT_APP_GOOGLE_OAUTH_CLIENT_ID } = process.env;

function LoginButton(props) {
  const history = useHistory();
  const location = useLocation();
  function reportError({ details }) {
    const msg = `Login/logout failed: ${details}`;
    alert(msg);
    console.error(msg);
  }
  function onLogin() {
    let { from } = location.state || { from: { pathname: "/" } };
    history.replace(from);
  }

  return (
    <AuthContext.Consumer>
      {({ user, setUser }) => {
        if (user) {
          return (
            <GoogleLogout
              clientId={REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
              onLogoutSuccess={() => setUser(null)}
              onFailure={reportError}
              {...props}
            />
          );
        }

        return (
          <GoogleLogin
            clientId={REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
            onSuccess={({ profileObj: profile, tokenObj: token }) => {
              setUser({ profile, token }, onLogin);
            }}
            onFailure={reportError}
            {...props}
          />
        );
      }}
    </AuthContext.Consumer>
  );
}

export default LoginButton;
