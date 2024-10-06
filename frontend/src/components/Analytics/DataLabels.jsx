import React, { useEffect } from "react";

const DataLabels = () => {
  useEffect(() => {
    const options = {
      // Enable and customize data labels
      dataLabels: {
        enabled: true,
        style: {
          cssClass: "text-xs text-white font-medium",
        },
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 16,
          right: 16,
          top: -26,
        },
      },
      series: [
        {
          name: "Engagement",
          data: [1200, 1400, 1600, 1800, 2000, 2300], // Example engagement data
          color: "#1DA1F2", // Twitter Blue
        },
        {
          name: "Reach",
          data: [800, 900, 1200, 1300, 1500, 1600], // Example reach data
          color: "#E1306C", // Instagram Pink
        },
        {
          name: "Impressions",
          data: [2000, 2500, 3000, 3200, 3500, 4000], // Example impressions data
          color: "#FF0000", // YouTube Red
        },
      ],
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      legend: {
        show: true,
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1DA1F2", "#E1306C", "#FF0000"], // Color gradient for fill
        },
      },
      stroke: {
        width: 6,
      },
      xaxis: {
        categories: [
          "01 October",
          "02 October",
          "03 October",
          "04 October",
          "05 October",
          "06 October",
        ],
        labels: {
          show: true, // Show x-axis labels
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true, // Show y-axis
        labels: {
          formatter: function (value) {
            return value; // Return the raw value for y-axis labels
          },
        },
      },
    };

    if (
      document.getElementById("data-labels-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("data-labels-chart"),
        options
      );
      chart.render();
    }
  }, []);

  return (
    <div className=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-5">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            12.1L
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Total Subscribers
          </p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
          23%
          <svg
            className="w-3 h-3 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>
      <div id="data-labels-chart"></div>
    </div>
  );
};

export default DataLabels;
