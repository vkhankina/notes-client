import logo from "../logo.png";
import LoginButton from "../components/LoginButton";

function LoginPage() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <LoginButton />
    </header>
  );
}

export default LoginPage;
