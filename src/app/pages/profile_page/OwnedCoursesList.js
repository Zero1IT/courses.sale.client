import React from "react";
import {ListGroup} from "react-bootstrap";
import CourseListItem from "./CourseListItem";

function OwnedCoursesList({items}) {
  return (
    <ListGroup>
      {items.map(it => <CourseListItem key={it.id} item={it} baseUrl="/courses/control-panel/" secondUrl="/courses/info/"
                                       actionName="Управление курсом" secondaryActionName="Страница курса" />)}
    </ListGroup>
  )
}

export default OwnedCoursesList;