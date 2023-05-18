import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Process from "../Process/Process";
import Login from "../Login/Login";
import Results from "../Results/Results";
import { ConcernShape } from "../../interfaces";
import Welcome from "../Welcome/Welcome";
import { Route, Switch, useHistory} from "react-router-dom";

const App = () => {
  const [error, setError] = useState("");
  const [concerns, setConcerns] = useState<ConcernShape[] | null>(null);
  const [user, setUser] = useState<number | null>(null);

  const history = useHistory();

  const logout = () => {
    setUser(null);
    setConcerns(null);
    history.push('/login');
  }

  return (
    <div className="App">
      {error ? (
        <h1>{error}</h1>
      ) : (
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/process">
            <Header logout={logout}/>
            <Process setConcerns={setConcerns} setError={setError} user={user} />
          </Route>
          <Route exact path="/results">
            <Header logout={logout}/>
            <Results concerns={concerns} />
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default App;
