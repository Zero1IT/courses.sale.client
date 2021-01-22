import React from "react";
import {Card, Col, Row} from "react-bootstrap";


function ProcessRow(props) {
  return (
    <Row className="mt-5 align-items-center">
      <Col xs={"5"} sm={"4"} lg={"4"} className="offset-1 mr-5">
        <Card className="r-arrow">
          <Card.Header className="px-lg-1 py-lg-3 px-1 py-1">
            {props.text}
          </Card.Header>
        </Card>
      </Col>
      <Col md={"2"} lg={"1"} xs={"2"} className="b-card py-4">
        <div className="v-line" style={{height: "100%"}} />
        {props.content || props.children}
      </Col>
    </Row>
  )
}

export default ProcessRow;