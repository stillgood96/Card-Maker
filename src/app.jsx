import logo from "./logo.svg";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Login from "./components/login/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/maker/maker";

const App = ({ FileInput, authService }) => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker FileInput={FileInput} authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
