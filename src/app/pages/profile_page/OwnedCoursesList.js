import React from "react";
import {ListGroup} from "react-bootstrap";
import CourseListItem from "./CourseListItem";

function OwnedCoursesList({items}) {
  return (
    <ListGroup>
      {items.map(it => <CourseListItem item={it} baseUrl="" actionName="Управление курсом" />)}
    </ListGroup>
  )
}

export default OwnedCoursesList;