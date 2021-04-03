import React from "react";
import CourseListItem from "./CourseListItem";
import {ListGroup} from "react-bootstrap";

function EnrolledCoursesList({items}) {
  return (
    <ListGroup>
      {items.map(it => <CourseListItem item={it} baseUrl="/courses/info/" actionName="Перейти к курсу" />)}
    </ListGroup>
  )
}

export default EnrolledCoursesList;