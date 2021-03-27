import React from "react";
import {Card, Col} from "react-bootstrap";
import Link from "../../components/Link";
import {url} from "../../../js/services/responseResults";

function CourseItem({course}) {
  return (
    <Col className="p-xl-4 p-lg-3" lg={4} md={6}>
      <Card>
        <Card.Img variant={"top"} src={url + course.imgUrl} />
        <Card.Body>
          <Card.Title>
            <p className="text-line-1">{course.title}</p>
          </Card.Title>
          <Card.Text className="text-lines-limit">
            {course.description}
          </Card.Text>
          <Link className="btn btn-outline-secondary" to={"/courses/info/" + course.id}>Открыть</Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CourseItem;