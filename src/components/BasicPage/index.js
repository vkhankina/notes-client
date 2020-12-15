import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Footer from "./Footer";
import Notifications from "./Notifications";

function BasicPage({ title, children }) {
  return (
    <Container fluid>
      <Header />
      <Container fluid>
        <h1>{title}</h1>
        <Notifications />
        <div className="App-content">{children}</div>
      </Container>
      <Footer />
    </Container>
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
