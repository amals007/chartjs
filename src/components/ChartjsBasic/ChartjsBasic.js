import React, { useState } from "react";
import { UserData } from "../../../src/Data";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from './PieChart'
const ChartjsBasic = () => {
 
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
         //chartjs requires an object which contains two different properties such as labels and data sets
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="App">
      <div style={{ width: "700px" }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: "700px" }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: "700px" }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
};

export default ChartjsBasic;
