import { useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { ConcernShape } from "../../interfaces";
import Process from "../Pages/Process/Process";
import Login from "../Pages/Login/Login";
import Results from "../Pages/Results/Results";
import Welcome from "../Pages/Welcome/Welcome";
import NotFound from "../NotFound/NotFound";
import { Layout } from "../Layout/Layout";
import "./App.css";

const App = () => {
  const [error, setError] = useState<string>("");
  const [concerns, setConcerns] = useState<ConcernShape[] | null>(null);
  const [user, setUser] = useState<number | null>(null);
  const [tosInput, setTosInput] = useState('');
  const history = useHistory();

  const logout = () => {
    setUser(null);
    setConcerns(null);
    setTosInput('');
    history.push("/login");
  };

  return (
    <div className="App">
      {error ? <NotFound error={error} setError={setError}/> : 
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser}/>
        </Route>
        <Route exact path="/process">
          {user ? 
            <Layout logout={logout} user={user}>
              <Process
                  tosInput={tosInput}
                  setTosInput={setTosInput}
                  setConcerns={setConcerns}
                  setError={setError}
                  user={user}
                />
            </Layout>:
            <Redirect to={'/login'}/>
          }
        </Route>
        <Route exact path="/results">
          {concerns && user ? 
            <Layout logout={logout} user={user}>
              <Results concerns={concerns}/>
            </Layout>:
            <Redirect to={'/process'}/>
          }
        </Route>
        <Route path="/not-found">
            <NotFound error={error} setError={setError}/>
        </Route>
        <Route path="/*">
          <Redirect to={'/not-found'}/>
        </Route>
      </Switch>}
    </div>
  );
};

export default App;
