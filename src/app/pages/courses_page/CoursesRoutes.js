import React from "react";
import {Route, Switch} from "react-router-dom";
import CourseCreationPage from "./CourseCreationPage";
import CoursesListPage from "./CoursesListPage";
import CoursePage from "./CoursePage";
import CourseEnroll from "./CourseEnroll";
import PrivateRoute from "../../shared/PrivateRoute";
import Error404 from "../error_page/404";
import CourseControlPanel from "./CourseControlPanel";

function CoursesRoutes() {
  return (
    <Switch>
      <Route path="/courses/list/:page?" children={<CoursesListPage />} />
      <PrivateRoute path="/courses/create" children={<CourseCreationPage />} exact />
      <Route path="/courses/info/:id" children={<CoursePage />} />
      <PrivateRoute path="/courses/enroll/:id" children={<CourseEnroll />} />
      <PrivateRoute path="/courses/control-panel/:id" children={<CourseControlPanel />} />
      <Route path="*" children={<Error404/>}/>
    </Switch>
  );
}

export default CoursesRoutes;