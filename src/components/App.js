import { useDatas } from "../hooks/dataProviderHooks";
import UsersBarChart from "./Bar";
import CarList from "./CarList";
import Filter from "./Filter";
import LeftSidebar from "./LeftSidebar";
import Line from "./Line";
import Loader from "./Loader";
import CarsPieChart from "./Pie";

function App() {
  const data = useDatas();
  if (data.loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <div className="users">
        <LeftSidebar />
        <CarList />
      </div>
      <div className="data-chart">
        <UsersBarChart />
        <Line />
        <Filter />
        <CarsPieChart isAge={false} />
        <Line />
        <CarsPieChart isAge={true} />
      </div>
    </div>
  );
}

export default App;
