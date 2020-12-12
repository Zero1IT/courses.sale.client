import React from 'react';
import HomePage from "./home_page/HomePage";
import Wrapper from "./wrapper/Wrapper";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NoMatch from "./error_page/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" />
        <Route path="/" children={<Wrapper><HomePage/></Wrapper>} exact />
        <Route path="*" children={<NoMatch/>}/>
      </Switch>
    </Router>
  )
}

export default App;