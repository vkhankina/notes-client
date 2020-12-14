import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Notifications from "./Notifications";

function BasicPage({ title, children }) {
  return (
    <div className="App">
      <Header />
      <h1>{title}</h1>
      <Notifications />
      <div className="App-content">{children}</div>
      <Footer />
    </div>
  );
}

BasicPage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

BasicPage.defaultProps = {
  title: null,
  children: null,
};

export default BasicPage;
