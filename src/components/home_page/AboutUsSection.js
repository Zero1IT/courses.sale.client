import React from "react";
import {Row, Col, Container} from "react-bootstrap";

function AboutUsSection() {
  return (
    <Container as={"section"}>
      <Row className="block-h-1">
        <Col xs={"8"}>
          <Row>
            <Col xs={"6"} sm={"5"} lg={"3"} className="mt-5 pt-5">
              <h1>Немного о нас</h1>
              <hr className="wrap-line float-left" width="50px"/>
            </Col>
            <Col xs={"12"} className="mt-5">
              <p>
                Здесь нужен текст, помогите его придумать, помогите его придумать, помогите его придумать,
                помогите его придумать, помогите его придумать, помогите его придумать, помогите его придумать,
                помогите его придумать, помогите его придумать, помогите его придумать.
              </p>
            </Col>
            <Col xs={"12"} md={"6"} sm={"6"} className="mt-4">
              <button className="btn btn-blw">Узнать больше</button>
            </Col>
          </Row>
        </Col>
        <Col xs={"4"} className="img-col d-none d-md-block">
          <img src="/img/graduation.jpg" alt="student" className="adj-img"/>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUsSection;