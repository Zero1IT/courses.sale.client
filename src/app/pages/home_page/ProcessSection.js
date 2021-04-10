import React from "react";
import ProcessRow from "./ProcessRow";
import {Card, Col, Container, Row} from "react-bootstrap";

function ProcessSection() {

  const processes = [
    [<i className="icon-2 icofont-search-2"> </i>, "Найди интересующий курс в списке доступных курсов"],
    [<i className="icon-2 icofont-read-book"> </i>, "Прочти информацию о курсе, которая предоставляется лектором"],
    [<i className="icon-2 icofont-meeting-add"> </i>, "Запишись на курс, до даты начала"],
    [<i className="icon-2 icofont-brainstorming"> </i>, "Отслеживай информацию о курсе в личном кабинете"],
  ];

  return (
    <Container as={"section"}>
      <div className="block-h-1 text-center pb-5">
        <Row className="justify-content-center">
          <Col xl={"4"} xs={"6"}>
            <Card>
              <Card.Body>
                <h1>Процесс</h1>
                <p>Процесс записи пользователя на курсы, предоставляемые порталом</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {processes.map((item, i) => <ProcessRow key={i} content={item[0]} text={item[1]} />)}
      </div>
    </Container>
  )
}

export default ProcessSection;