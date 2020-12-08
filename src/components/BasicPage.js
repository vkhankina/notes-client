import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import LoginButton from "./LoginButton";

function BasicPage({ children }) {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <LoginButton className="App-login" />
      </header>
      <div className="App-content">{children}</div>
      <footer className="App-footer">
        <Link to="/privacy" className="App-link">
          Privacy
        </Link>
        <Link to="/terms" className="App-link">
          Terms of service
        </Link>
        2020
      </footer>
    </div>
  );
}

BasicPage.propTypes = {
  children: PropTypes.node,
};

BasicPage.defaultProps = {
  children: null,
};

export default BasicPage;
