import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  const history = useHistory();
  return (
    <Navbar
      sticky="bottom"
      bg="light"
      variant="light"
      className="justify-content-center"
      onSelect={(key) => history.push(`/${key}`)}
    >
      <Nav>
        <Nav.Item>
          <Nav.Link eventKey="privacy">Privacy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="terms">Terms of service</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled>2020</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
