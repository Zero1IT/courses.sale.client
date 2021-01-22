import React from "react";
import FeaturedCard from "./FeaturedCard";
import {Container, Row} from "react-bootstrap";

function FeaturedSection() {

  const test = [1, 2, 3, 4];

  return (
    <Container as={"section"} className="pt-5 bg-image-section bg-feature-section">
      <Row className="justify-content-center">
        {test.map((i) => <FeaturedCard key={i} />)}
      </Row>
      <Row>
        {test.map((i) => <FeaturedCard key={i} />)}
      </Row>
    </Container>
  )
}

export default FeaturedSection;