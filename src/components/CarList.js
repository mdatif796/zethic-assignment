import { useEffect, useState } from "react";
import { useDatas } from "../hooks/dataProviderHooks";
import styles from "../styles/carList.module.css";
import CarUser from "./CarUser";

const CarList = () => {
  const [carName, setCarName] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(5);
  const [isCarUser, setIsCarUser] = useState(false);
  const [currCar, setCurrCar] = useState("");
  const data = useDatas();
  useEffect(() => {
    let array = data.data.map(({ vehicle }) => {
      return vehicle.make;
    });
    setCarName([...new Set(array)]);
  }, [data.data]);

  const handlePrevBtn = () => {
    if (currIndex === 0) {
      return;
    }
    setCurrIndex(currIndex - 5);
    setNextIndex(nextIndex - 5);
  };

  const handleNextBtn = () => {
    if (nextIndex >= carName.length) {
      return;
    }
    setCurrIndex(nextIndex);
    setNextIndex(nextIndex + 5);
  };

  function showCarUser(car) {
    setCurrCar(car);
    setIsCarUser(true);
  }

  const hideCarUser = () => {
    setIsCarUser(false);
  };

  return (
    <div className={styles.carListContainer}>
      {isCarUser ? (
        <CarUser hideCarUser={hideCarUser} carManufacturer={currCar} />
      ) : (
        ""
      )}
      <h1>Car Manufacturer</h1>
      <div className={styles.carContainer}>
        {carName.slice(currIndex, nextIndex).map((car, index) => {
          return (
            <div
              onClick={() => showCarUser(car)}
              key={index}
              className={styles.car}
            >
              {car}
            </div>
          );
        })}
      </div>
      <div className={styles.btnContainer}>
        <button onClick={handlePrevBtn} className={styles.btn}>
          prev
        </button>
        <button onClick={handleNextBtn} className={styles.btn}>
          next
        </button>
      </div>
    </div>
  );
};

export default CarList;
