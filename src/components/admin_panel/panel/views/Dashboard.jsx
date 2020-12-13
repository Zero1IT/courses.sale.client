/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ChartistGraph from "react-chartist";

import {Card} from "../components/Card/Card.jsx";
import {StatsCard} from "../components/StatsCard/StatsCard.jsx";
import {Tasks} from "../components/Tasks/Tasks.jsx";
import {
  dataBar,
  dataPie,
  dataSales,
  legendBar,
  legendPie,
  legendSales,
  optionsBar,
  optionsSales,
  responsiveBar,
  responsiveSales
} from "../variables/Variables.jsx";

function Dashboard() {
  const createLegend = (json) => {
    const legend = [];
    for (let i = 0; i < json["names"].length; i++) {
      const type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <StatsCard
              bigIcon={<i className="pe-7s-server text-warning" />}
              statsText="Capacity"
              statsValue="105GB"
              statsIcon={<i className="fa fa-refresh" />}
              statsIconText="Updated now"
            />
          </div>
          <div className="col-sm-6 col-lg-3">
            <StatsCard
              bigIcon={<i className="pe-7s-wallet text-success" />}
              statsText="Revenue"
              statsValue="$1,345"
              statsIcon={<i className="fa fa-calendar-o" />}
              statsIconText="Last day"
            />
          </div>
          <div className="col-sm-6 col-lg-3">
            <StatsCard
              bigIcon={<i className="pe-7s-graph1 text-danger" />}
              statsText="Errors"
              statsValue="23"
              statsIcon={<i className="fa fa-clock-o" />}
              statsIconText="In the last hour"
            />
          </div>
          <div className="col-sm-6 col-lg-3">
            <StatsCard
              bigIcon={<i className="fa fa-twitter text-info" />}
              statsText="Followers"
              statsValue="+45"
              statsIcon={<i className="fa fa-refresh" />}
              statsIconText="Updated now"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Card
              statsIcon="fa fa-history"
              id="chartHours"
              title="Users Behavior"
              category="24 Hours performance"
              stats="Updated 3 minutes ago"
              content={
                <div className="ct-chart">
                  <ChartistGraph
                    data={dataSales}
                    type="Line"
                    options={optionsSales}
                    responsiveOptions={responsiveSales}
                  />
                </div>
              }
              legend={
                <div className="legend">{createLegend(legendSales)}</div>
              }
            />
          </div>
          <div className="col-md-4">
            <Card
              statsIcon="fa fa-clock-o"
              title="Email Statistics"
              category="Last Campaign Performance"
              stats="Campaign sent 2 days ago"
              content={
                <div
                  id="chartPreferences"
                  className="ct-chart ct-perfect-fourth"
                >
                  <ChartistGraph data={dataPie} type="Pie" />
                </div>
              }
              legend={
                <div className="legend">{createLegend(legendPie)}</div>
              }
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Card
              id="chartActivity"
              title="2014 Sales"
              category="All products including Taxes"
              stats="Data information certified"
              statsIcon="fa fa-check"
              content={
                <div className="ct-chart">
                  <ChartistGraph
                    data={dataBar}
                    type="Bar"
                    options={optionsBar}
                    responsiveOptions={responsiveBar}
                  />
                </div>
              }
              legend={
                <div className="legend">{createLegend(legendBar)}</div>
              }
            />
          </div>

          <div className="col-md-6">
            <Card
              title="Tasks"
              category="Backend development"
              stats="Updated 3 minutes ago"
              statsIcon="fa fa-history"
              content={
                <div className="table-full-width">
                  <table className="table">
                    <Tasks />
                  </table>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
