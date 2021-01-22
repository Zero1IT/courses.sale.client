import React, {useEffect, useState} from 'react';
import Wrapper from "./wrapper/Wrapper";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminPage from "./admin_panel/AdminPage";
import Auth from "./auth/Auth";
import AuthService from "../services/AuthService";
import CircleLoader from "./shared/CircleLoader";

function App() {
  const [access, setAccess] = useState("");

  useEffect(() => {
    AuthService.tryLogin()
      .then(setAccess)
  }, []);

  if (access !== "") {
    return (
      <Auth access={access}>
        <Router>
          <Switch>
            <Route path="/admin" children={ <AdminPage/> } />
            <Route path="/" children={ <Wrapper/> } />
          </Switch>
        </Router>
      </Auth>
    )
  } else {
    return <CircleLoader noBg />
  }
}

export default App;