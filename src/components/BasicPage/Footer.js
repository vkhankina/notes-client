import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="App-footer">
      <Link to="/privacy" className="App-link">
        Privacy
      </Link>
      <Link to="/terms" className="App-link">
        Terms of service
      </Link>
      2020
    </footer>
  );
}
