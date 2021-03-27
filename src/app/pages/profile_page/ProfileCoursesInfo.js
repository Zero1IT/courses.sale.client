import React from "react";
import {Tabs, Tab, Container} from "react-bootstrap";
import OwnedCoursesList from "./OwnedCoursesList";
import EnrolledCoursesList from "./EnrolledCoursesList";

function ProfileCoursesInfo() {
  return (
    <Container as="section">
      <Tabs>
        <Tab eventKey="owned" title="Мои курсы">
          <OwnedCoursesList />
        </Tab>
        <Tab eventKey="enrolled" title="Курсы на которые я записан">
          <EnrolledCoursesList />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default ProfileCoursesInfo;