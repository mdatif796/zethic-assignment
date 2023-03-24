import { useContext, useEffect, useState } from "react";
import { DatasContext } from "../providers/dataProvider";
import "chart.js/auto";
import { faker } from "@faker-js/faker";

export const useDatas = () => {
  return useContext(DatasContext);
};

export const useProvideDatas = () => {
  const [datas, setDatas] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [loading, setLoading] = useState(true);

  const generateFakeDatas = () => {
    const users = [];
    for (let i = 0; i < 10000; i++) {
      const user = {
        id: i + 1,
        username: faker.internet.userName(),
        address:
          faker.address.streetAddress() +
          ", " +
          faker.address.city() +
          ", " +
          faker.address.country(),
        age: faker.datatype.number({
          min: 18,
          max: 90,
        }),
        phoneNumber: faker.phone.number(),
        occupation: faker.name.jobTitle(),
        vehicle: {
          make: faker.vehicle.manufacturer(),
          model: faker.vehicle.model(),
          carAge: faker.datatype.number({
            min: 1,
            max: 7,
          }),
          type: faker.vehicle.type(),
        },
      };
      users.push(user);
    }
    return users;
  };

  useEffect(() => {
    const d = generateFakeDatas();
    setDatas(d);
    setPieData(d);
    setLoading(false);
  }, []);

  const generateDataForBarChart = () => {
    const countries = {};
    for (const user of datas) {
      const country = user.address.split(", ")[2];
      if (countries[country]) {
        countries[country]++;
      } else {
        countries[country] = 1;
      }
    }
    const labels = Object.keys(countries);
    const data = Object.values(countries);
    return { labels, data };
  };

  const generateDataForPieChart = () => {
    const cars = {};
    for (const user of pieData) {
      const model = user.vehicle.make;
      if (cars[model]) {
        cars[model]++;
      } else {
        cars[model] = 1;
      }
    }

    const labels = Object.keys(cars);
    const data = Object.values(cars);
    return { labels, data };
  };

  const generateDataForPieChartCarAge = () => {
    const cars = {};
    for (const user of pieData) {
      const age = user.vehicle.carAge;
      if (cars[age]) {
        cars[age]++;
      } else {
        cars[age] = 1;
      }
    }

    const labels = Object.keys(cars);
    const data = Object.values(cars);
    return { labels, data };
  };

  const filterPieData = (minUserAge, maxUserAge) => {
    let filterData = datas.filter((user) => {
      return user.age >= minUserAge && user.age <= maxUserAge;
    });
    setPieData(filterData);
  };

  return {
    data: datas,
    pieData,
    loading: loading,
    generateDataForBarChart: generateDataForBarChart,
    generateDataForPieChart: generateDataForPieChart,
    generateDataForPieChartCarAge: generateDataForPieChartCarAge,
    filterPieData,
  };
};
