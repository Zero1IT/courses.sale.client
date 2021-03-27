import React from "react";
import EmailField from "../../components/EmailField";
import {Button, Col, Container, Row} from "react-bootstrap";
import DefaultRegistrationHandler from "../../shared/DefaultRegistrationHandler";

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
            <DefaultRegistrationHandler className="form-1 col-md-6"/>
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