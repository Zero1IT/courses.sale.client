import React from 'react';
import Wrapper from "./wrapper/Wrapper";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminPage from "./admin_panel/AdminPage";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/admin" children={<AdminPage/>} />
        <Route path="/" children={<Wrapper/>} />
      </Switch>
    </Router>
  )
}

export default App;