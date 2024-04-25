import { Doughnut } from "react-chartjs-2";
// import Chart from "chart.js/auto";

const DoughnutChartWithText = () => {
  const data = {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["red", "blue", "green"],
        label: "Dataset 1",
      },
    ],
    labels: ["Red", "Blue", "Green"],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: false,
      },
    },
    animation: {
      onComplete: function () {
        const chartInstance = this.chart;
        const ctx = chartInstance.ctx;
        const width = chartInstance.width;
        const height = chartInstance.height;
        ctx.restore();
        const fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        const text = "Applied",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChartWithText;
