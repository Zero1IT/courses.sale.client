import React from "react";
import Switch from "react-bootstrap/Switch";
import {Route} from "react-router-dom";
import CourseCreationPage from "./CourseCreationPage";
import CoursesListPage from "./CoursesListPage";
import CoursePage from "./CoursePage";
import CourseEnroll from "./CourseEnroll";
import PrivateRoute from "../../shared/PrivateRoute";

function CoursesRoutes() {
  return (
    <Switch>
      <Route path="/courses/list/:page?" children={<CoursesListPage />} />
      <PrivateRoute path="/courses/create" children={<CourseCreationPage />} exact />
      <Route path="/courses/info/:id" children={<CoursePage />} />
      <PrivateRoute path="/courses/enroll/:id" children={<CourseEnroll />} />
    </Switch>
  )
}

export default CoursesRoutes;