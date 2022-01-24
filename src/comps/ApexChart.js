import React from "react";
import ReactApexChart from "react-apexcharts";

let data;
let time = [];

const ApexChart = (props) => {
  data = props.values || 0;

  for (let i = 1; i <= 60; i++) {
    time.push(`${i}'`);
  }

  const series = [
    {
      name: "Bitcoin",
      data: data,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: `Bitcoin Value Per Hour in ${props.curr}`,
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: time,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
