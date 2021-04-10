import React, {useEffect, useState} from 'react';
import Wrapper from "./wrapper/Wrapper";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminPage from "./admin_panel/AdminPage";
import Auth from "./auth/Auth";
import AuthService from "../js/services/AuthService";
import CircleLoader from "./shared/CircleLoader";
import Handler from "./wrapper/Handler";
import PrivateRoute from "./shared/PrivateRoute";

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
          <Handler>
            <Switch>
              <PrivateRoute path="/admin" children={ <AdminPage/> } />
              <Route path="/" children={ <Wrapper/> } />
            </Switch>
          </Handler>
        </Router>
      </Auth>
    )
  } else {
    return <CircleLoader noBg />
  }
}

export default App;