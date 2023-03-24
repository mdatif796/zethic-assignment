import { Pie } from "react-chartjs-2";
import { useDatas } from "../hooks/dataProviderHooks";
import Heading from "./Heading";
import styles from "../styles/pie.module.css";

const CarsPieChart = ({ isAge }) => {
  const users = useDatas();
  const dataForPieChart = isAge
    ? users.generateDataForPieChartCarAge()
    : users.generateDataForPieChart();
  const data = {
    labels: dataForPieChart.labels,
    datasets: [
      {
        data: dataForPieChart.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    layout: {
      // height: 400,
      // padding: {
      //   left: 20,
      //   right: 20,
      // },
    },
  };
  const hea = isAge
    ? "Pie chart of car's age"
    : "Pie chart of car models on the basis of car maker";
  return (
    <div className={styles.pieContainer}>
      <Heading heading={hea} />
      <Pie data={data} options={options} />
    </div>
  );
};

export default CarsPieChart;
