import React from "react";
import {Redirect, useParams} from "react-router-dom";
import Query from "../../shared/Query";
import CourseService from "../../../js/services/CourseService";
import {Badge, Col, Container, Image, Row} from "react-bootstrap";
import {url} from "../../../js/services/responseResults";
import Link from "../../components/Link";
import {converter} from "../../components/FormField";

function CoursePage() {
  const {id} = useParams();

  // TODO: duplicate query bug
  if (id && id > 0) {
    return (
      <Query promise={CourseService.getById(id)}>
        {course =>
          <Container>
            <Row>
              <Col lg={6}>
                <Image src={url + course.imgUrl} rounded fluid/>
              </Col>
              <Col lg={6}>
                <h2 className="text-center ellipsis">{course.title}</h2>
                <h5 className="text-center">Стоимость: <Badge variant="primary">{course.cost}</Badge> бел. рублей</h5>
                <div>
                  <p>Начало: {course.startDate.toLocaleString()}</p>
                  <p>Осталось мест: {course.places}</p>
                </div>
                <div className="wrap-line" />
                <div>
                  <h2   className="text-center">Описание</h2>
                  <div dangerouslySetInnerHTML={{
                    __html: course.description ? converter.makeHtml(course.description) : 'Описание отсутствует'
                  }} />
                </div>
                <Link to={"/courses/enroll/" + course.id} className={"btn btn-primary"}>Записаться на курс</Link>
              </Col>
            </Row>
          </Container>
        }
      </Query>
    )
  } else {
    return <Redirect to={"/"} />
  }
}

export default CoursePage;