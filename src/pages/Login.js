import logo from "../logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LoginButton from "../components/buttons/LoginButton";

function LoginPage() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <img src={logo} alt="logo" />
      </Row>
      <Row className="justify-content-center">
        <LoginButton />
      </Row>
    </Container>
  );
}

export default LoginPage;
