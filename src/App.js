import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/Login";
import NotesPage from "./pages/Notes";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";
import Page404 from "./pages/404";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/notes" />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/privacy" exact>
            <PrivacyPage />
          </Route>
          <Route path="/terms" exact>
            <TermsPage />
          </Route>
          <PrivateRoute path="/notes" exact>
            <NotesPage />
          </PrivateRoute>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
