import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import Process from "../Process/Process";
import Login from "../Login/Login";
import Results from "../Results/Results";
import { ConcernShape } from "../../interfaces";
import Welcome from "../Welcome/Welcome";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const App = () => {
  const [error, setError] = useState<string>("");
  const [concerns, setConcerns] = useState<ConcernShape[] | null>(null);
  const [user, setUser] = useState<number | null>(null);

  const history = useHistory();

  const logout = () => {
    setUser(null);
    setConcerns(null);
    history.push("/login");
  };

  return (
    <div className="App">
      {error ? (
        <NotFound error={error} setError={setError}/>
        // <Redirect to={'/not-found'}/>
      ) : (
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/process">
          {user ? (
            <>
              <Header logout={logout} user={user} />
              <Process
                setConcerns={setConcerns}
                setError={setError}
                user={user}
              />
            </>
            ) : (
              <Redirect to={'/login'}/>
            )}
          </Route>
          <Route exact path="/results">
            {concerns ? (
              <>
                <Header logout={logout} user={user} />
                <Results concerns={concerns} />
              </>
            ) : (
              <Redirect to={'/process'}/>
            )}
          </Route>
          <Route path="/not-found">
              <NotFound error={error} setError={setError}/>
          </Route>
          <Route path="/*">
            <Redirect to={'/not-found'}/>
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default App;
