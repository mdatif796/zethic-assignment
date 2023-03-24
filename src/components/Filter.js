import { useState } from "react";
import { useDatas } from "../hooks/dataProviderHooks";
import styles from "../styles/filter.module.css";

const userAgeRange = [
  {
    min: 20,
    max: 30,
  },
  {
    min: 31,
    max: 40,
  },
  {
    min: 41,
    max: 50,
  },
  {
    min: 51,
    max: 60,
  },
  {
    min: 61,
    max: 70,
  },
  {
    min: 71,
    max: 80,
  },
  {
    min: 81,
    max: 90,
  },
];

const generateText = (min, max) => `${min} - ${max}`;

const Filter = () => {
  const [showFilterOption, setShowFilterOption] = useState(false);
  const [filterName, setFilterName] = useState("");
  const data = useDatas();

  const handleOnClick = (range) => (e) => {
    data.filterPieData(range.min, range.max);
    setFilterName(generateText(range.min, range.max));
  };

  return (
    <div className={styles.headerFilter}>
      <div
        className={styles.filterButton}
        onClick={() => setShowFilterOption(!showFilterOption)}
      >
        FILTER
      </div>
      {showFilterOption ? (
        <div className={styles.filterOptions}>
          <div className={styles.filterInfo}>
            <h3>Filter options</h3>
            <h5>{`(User age range)`}</h5>
          </div>

          <div className={styles.filterOptionAge}>
            {userAgeRange.map((range) => {
              const rangeText = generateText(range.min, range.max);
              return (
                <h4
                  onClick={handleOnClick(range)}
                  key={rangeText}
                  style={{
                    backgroundColor:
                      filterName === rangeText ? "rgb(89, 205, 228)" : "",
                  }}
                >
                  {rangeText}
                </h4>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Filter;
