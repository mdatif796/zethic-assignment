import { List } from "react-virtualized";
import { useDatas } from "../hooks/dataProviderHooks";
import styles from "../styles/carUser.module.css";

const CarUser = ({ carManufacturer, hideCarUser }) => {
  let data = useDatas();
  data = data.data.filter((user) => {
    return user.vehicle.make === carManufacturer;
  });
  return (
    <div className={styles.carUserContainer}>
      <p className={styles.cross} onClick={() => hideCarUser()}>
        ╳
      </p>
      <div className={styles.userList}>
        <h2>User Name</h2>
      </div>
      <div>
        <List
          width={300}
          height={600}
          rowHeight={50}
          rowCount={data.length}
          rowRenderer={({ index, style }) => {
            const user = data[index];
            return (
              <div className={styles.userName} key={user.id} style={style}>
                <h4>{`${user.username}`}</h4>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default CarUser;
