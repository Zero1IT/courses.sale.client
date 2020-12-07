import React from "react";

function StatisticCard(props) {
  const {title, value} = props;
  return (
    <div className="col col-sm col-md-3 col-lg-2 col-xl-2 text-center">
      <p className="rounded-circle border py-5">
        {props.content || props.children}
      </p>
      <p className="number-us">{value}</p>
      <hr className="wrap-line" style={{width: "40px"}} />
      <p>{title}</p>
    </div>
  )
}

export default StatisticCard;