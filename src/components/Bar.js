import { Bar } from "react-chartjs-2";
import { useDatas } from "../hooks/dataProviderHooks";
import styles from "../styles/bar.module.css";
import Heading from "./Heading";

const UsersBarChart = () => {
  const users = useDatas();
  const dataForBarChart = users.generateDataForBarChart();
  const data = {
    labels: dataForBarChart.labels,
    datasets: [
      {
        label: "Users by Country",
        data: dataForBarChart.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true, //for style circle
        },
      },
    },
    scales: {
      x: {
        // grid: {
        display: false,
        // },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectsRation: false,
    layout: {
      padding: {
        right: 20,
        left: 20,
      },
    },
  };
  return (
    <div className={styles.barContainer}>
      <Heading heading={"Bar chart of Users in each country"} />
      <Bar data={data} options={options} />
    </div>
  );
};

export default UsersBarChart;
