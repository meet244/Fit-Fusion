import React from "react";
import ApexChart1 from "./ApexChart1";
import ApexChart2 from "./ApexChart2";
import ApexChart3 from "./ApexChart3";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DataLabels from "./DataLabels";
import Trends from "./Trends";
import { Fade } from "react-awesome-reveal";

const Analytics = () => {
  return (
    <div className="flex flex-col mx-4 py-6 gap-6">
      <div className="flex  gap-4 flex-wrap">
        <div>
          <ApexChart1 />
        </div>
        <div>
          <ApexChart2 />
        </div>
        <div>
          <ApexChart3 />
        </div>
      </div>
      <LineChart />
      <div className="flex gap-4">
        <PieChart />
        <DataLabels />
      </div>
      <Trends/>
    </div>
  );
};

export default Analytics;
