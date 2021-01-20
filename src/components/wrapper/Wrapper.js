import React from "react";
import Navbar from "./Navbar";
import {Switch, Route} from "react-router-dom";
import HomePage from "../home_page/HomePage";
import NoMatch from "../error_page/NoMatch";
import CoursesPage from "../courses_page/CoursesPage";

class Wrapper extends React.Component {

  componentDidMount() {
    window.externalJS.wrapperNavbar();
  }

  render() {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main style={{paddingTop: "80px"}}>
          <Switch>
            <Route path="/courses" children={<CoursesPage />} />
            <Route path="/" children={<HomePage/>} exact />
            <Route path="*" children={<NoMatch/>}/>
          </Switch>
        </main>
      </>
    )
  }
}

export default Wrapper;