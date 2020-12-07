import React, {useMemo} from "react";
import StatisticCard from "./StatisticCard";

function StatisticsSection() {

  const cards = useMemo(() => [
    {content: <i className="icon icofont-teacher"> </i>, title: "Лекторов", value: 89},
    {content: <i className="icon icofont-people"> </i>, title: "Учащихся", value: 2832},
    {content: <i className="icon icofont-search-document"> </i>, title: "Курсов", value: 192},
  ], []);

  return (
    <section className="container">
      <div className="row block-h-1">
        <div className="col">
          <h1 className="text-center p-4">Статистика</h1>
          <p className="text-center mb-5">Мы помогаем совершенствовать твои знания</p>
          <div className="row justify-content-around">
            {cards.map(item => <StatisticCard {...item} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection;