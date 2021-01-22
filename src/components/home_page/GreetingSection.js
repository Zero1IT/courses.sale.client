import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

function GreetingSection() {

  const startBtnClick = () => {
    document.getElementById("mail").scrollIntoView({behavior: "smooth"});
  };

  return (
    <Container fluid as={"section"}>
      <Row className="block-h-1">
        <Col lg={"6"} md={"12"} className="dark-section greet-block-1 p-5">
          <h1 className="pb-3">Доступное онлайн обучение</h1>
          <p className="my-5">
            Портал создан для предоставления доступа как к платным, так и бесплатным обучающим курсам.
            Чтобы начать пользоваться курсами, или предоставить свои услуги, необходимо зарегистрироваться.
          </p>
          <div className="btn-group p-3">
            <Button variant={"bw"} onClick={startBtnClick} className="py-2 px-4">Нажми чтобы начать</Button>
          </div>
        </Col>
        <Col lg={"6"} md={"12"} className="img-col">
          <img src="/img/home-student.jpg" alt="student" className="adj-img"/>
        </Col>
      </Row>
    </Container>
  )
}

export default GreetingSection;