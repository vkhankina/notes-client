import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo.png";
import LoginButton from "../buttons/LoginButton";

export default function Header() {
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Navbar.Brand>
        <Link to="/" className="float-left">
          <img src={logo} width={64} height={64} alt="logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <LoginButton />
      </Navbar.Collapse>
    </Navbar>
  );
}
