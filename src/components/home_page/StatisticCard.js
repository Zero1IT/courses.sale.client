import React from "react";
import {Col} from "react-bootstrap";

function StatisticCard(props) {
  const {title, value} = props;
  return (
    <Col sm md={"3"} lg={"2"} xl={"2"} className="text-center">
      <p className="rounded-circle border py-5">
        {props.content || props.children}
      </p>
      <p className="number-us">{value}</p>
      <hr className="wrap-line" style={{width: "40px"}} />
      <p>{title}</p>
    </Col>
  )
}

export default StatisticCard;