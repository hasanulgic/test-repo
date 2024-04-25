import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function Donutchart() {
  const [contryname, setCountryname] = useState([]);
  const [medal, setMedal] = useState([]);

  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3">
        <Chart
          type="donut"
          width={349}
          height={550}
          series={[85, 250]}
          options={{
            labels: ["bd", "us"],

            plotOptions: {
              pie: {
                donut: {
                  labels: {
                  },
                },
              },
            },

            dataLabels: {
              enabled: false,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
export default Donutchart;
