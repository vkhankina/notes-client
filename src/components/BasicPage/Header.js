import { Link } from "react-router-dom";
import logo from "../../logo.png";
import LoginButton from "../LoginButton";

export default function Header() {
  return (
    <header className="App-header">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <LoginButton className="App-login" />
    </header>
  );
}
