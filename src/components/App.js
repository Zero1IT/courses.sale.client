import React from 'react';
import Wrapper from "./wrapper/Wrapper";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminPage from "./admin_panel/AdminPage";
import Auth from "./auth/Auth";

function App() {

  return (
    <Auth>
      <Router>
        <Switch>
          <Route path="/admin" children={<AdminPage/>} />
          <Route path="/" children={<Wrapper/>} />
        </Switch>
      </Router>
    </Auth>
  )
}

export default App;