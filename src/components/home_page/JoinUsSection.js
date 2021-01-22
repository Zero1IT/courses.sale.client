import React from "react";
import EmailField from "../shared/EmailField";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

function JoinUsSection() {
  return (
    <Container fluid as={"section"}>
      <Row className="block-h-1">
        <Col lg={"6"} md={"12"} className="img-col">
          <img src="/img/join-us.jpg" alt="join us" className="adj-img"/>
        </Col>
        <Col lg={"6"} md={"12"} className="greet-block-1 dark-section">
          <h1 className="text-center mt-4">Заполни форму</h1>
          <Row className="justify-content-around mt-3">
            <form className="form-1 col-md-6">
              <Form.Group>
                <Form.Control type="text" id="first_name" placeholder="Имя"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" id="last_name" placeholder="Фамилия"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" id="email" placeholder="Электронная почта"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" id="password" placeholder="Пароль"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" id="repeat_password" placeholder="Подтвердите пароль"/>
              </Form.Group>
              <Button>Регистрация</Button>
            </form>
          </Row>
          <h1 className="text-center text-uppercase mt-2">или</h1>
          <p className="text-center">Введи email и на почту будет выслан пароль для входа</p>
          <Row noGutters className="justify-content-center pb-3">
            <Col md={"5"}>
              <EmailField />
            </Col>
            <Col md={"2"}>
              <Button variant={"success"}>Подтвердить</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default JoinUsSection;