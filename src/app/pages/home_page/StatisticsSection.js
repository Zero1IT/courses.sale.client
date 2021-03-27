import React, {useMemo} from "react";
import StatisticCard from "./StatisticCard";
import {Col, Container, Row} from "react-bootstrap";

function StatisticsSection() {

  const cards = useMemo(() => [
    {content: <i className="icon icofont-teacher"> </i>, title: "Лекторов", value: 89},
    {content: <i className="icon icofont-people"> </i>, title: "Учащихся", value: 2832},
    {content: <i className="icon icofont-search-document"> </i>, title: "Курсов", value: 192},
  ], []);

  return (
    <Container as={"section"}>
      <Row className="block-h-1">
        <Col>
          <h1 className="text-center p-4">Статистика</h1>
          <p className="text-center mb-5">Мы помогаем совершенствовать твои знания</p>
          <Row className="justify-content-around">
            {cards.map((item, i) => <StatisticCard key={i} {...item} />)}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default StatisticsSection;