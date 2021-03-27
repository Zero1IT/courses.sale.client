import React from "react";
import {Button, Container, Row} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";
import CourseService from "../../../js/services/CourseService";
import Query from "../../shared/Query";

function CourseEnroll() {
  const {id} = useParams();
  const history = useHistory();

  const enrollClick = () => {
    // TODO: handler
    CourseService.enrollToCourse(id)
      .then(() => history.goBack());
  };

  const unenrollClick = () => {
    // TODO: handler
    CourseService.unenrollFromCourse(id)
      .then(() => history.goBack());
  };

  return (
    <Query promise={CourseService.checkEnrolled(id)}>
      {data =>
        <Container>
          <Row>
            {/* TODO: info about course */}
            <h1>INFO</h1>
          </Row>
          <Row>
            {data.enrolled ?
              <Button variant="danger" onClick={unenrollClick}>Отменить заявку</Button>
              : <Button onClick={enrollClick}>Подать заявку</Button>
            }
          </Row>
        </Container>
      }
    </Query>
  );
}

export default CourseEnroll;