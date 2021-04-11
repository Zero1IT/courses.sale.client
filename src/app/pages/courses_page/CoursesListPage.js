import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import CourseItem from "./CourseItem";
import CourseFilter from "./CourseFilter";
import Link from "../../components/Link";
import Paginator from "../../components/Paginator";
import {useParams} from "react-router-dom";
import StorageQueryWaiting from "../../components/StorageQueryWaiting";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourses} from "../../storage/async-actions";

function CoursesListPage() {
  const {page=1} = useParams();
  const dispatch = useDispatch();
  const coursesData = useSelector(store => store.courses.data);

  useEffect(() => dispatch(fetchCourses(page)), [dispatch, page]);

  return (
    <Container fluid>
      <Row>
        <CourseFilter />
      </Row>
      <StorageQueryWaiting data={coursesData}>
        {(data) =>
          <>
            <Container>
              <Row>
                <Col lg={3} md={6} xs={6}>
                  {data && data.pageable && <p>Показано {data.pageable.offset + data.numberOfElements}/{data.totalElements} курсов</p>}
                </Col>
                <Col lg={3} md={3} xs={6} className="offset-lg-6 offset-md-3 offset-sm-0">
                  <Link className="btn btn-outline-info float-right" to="/courses/create">Создать курс</Link>
                </Col>
              </Row>
            </Container>
            <Row>{data.content && data.content.map(it => <CourseItem key={it.id} course={it} />)}</Row>
            <Paginator info={data} link="/courses/list/" />
          </>
        }
      </StorageQueryWaiting>
    </Container>
  )
}

export default CoursesListPage;