import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Notifications from "./Notifications";

function BasicPage({ children }) {
  return (
    <div className="App">
      <Header />
      <Notifications />
      <div className="App-content">{children}</div>
      <Footer />
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
