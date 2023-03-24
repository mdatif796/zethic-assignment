import { createContext } from "react";
import { useProvideDatas } from "../hooks/dataProviderHooks";

const initialState = {
  data: [],
  pieData: [],
  loading: true,
  generateDataForBarChart: () => {},
  generateDataForPieChart: () => {},
  generateDataForPieChartCarAge: () => {},
  filterPieData: () => {},
};

export const DatasContext = createContext(initialState);

export const DatasProvider = ({ children }) => {
  const datas = useProvideDatas();

  return (
    <DatasContext.Provider value={datas}>{children}</DatasContext.Provider>
  );
};
