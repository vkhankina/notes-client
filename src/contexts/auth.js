import React, { useState } from "react";
import PropTypes from "prop-types";

import AuthStorage from "../utils/auth";

const noOp = () => {};

const AuthContext = React.createContext({
  user: null,
  setUser: () => {},
});

function AuthProvider({ children }) {
  const [user, setContextUser] = useState(AuthStorage.getUser());

  function setUser(data, cb = noOp) {
    AuthStorage.setUser(data);
    setContextUser(data);
    cb();
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: null,
};

export { AuthProvider };
export default AuthContext;
