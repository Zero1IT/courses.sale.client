import React from "react";
import FixedNavbar from "./FixedNavbar";
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/home_page/HomePage";
import CoursesRoutes from "../pages/courses_page/CoursesRoutes";
import Error404 from "../pages/error_page/404";
import AuthenticationPage from "../pages/AuthenticationPage";
import ProfilePage from "../pages/profile_page/ProfilePage";
import AuthenticationContext from "../auth/AuthenticationContext";
import PrivateRoute from "../shared/PrivateRoute";

class Wrapper extends React.Component {
  
  componentDidMount() {
    window.externalJS.wrapperNavbar();
  }

  render() {
    return (
      <AuthenticationContext.Consumer>
        {auth =>
          <>
            <header>
              <FixedNavbar />
            </header>
            <main style={{paddingTop: "80px", marginBottom: "40px"}}>
              <Switch>
                <Route path="/courses" children={<CoursesRoutes />} />
                <PrivateRoute path="/profile" children={<ProfilePage />} />
                {!auth.authenticated && <Route path="/login" children={<AuthenticationPage />} exact />}
                <Route path="/" children={<HomePage/>} exact />
                <Route path="*" children={<Error404/>}/>
              </Switch>
            </main>
          </>
        }
      </AuthenticationContext.Consumer>
    )
  }
}

export default Wrapper;