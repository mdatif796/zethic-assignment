import { useState } from "react";
import { List } from "react-virtualized";
import { useDatas } from "../hooks/dataProviderHooks";
import styles from "../styles/leftSidebar.module.css";
import UserDetails from "./UserDetails";

const LeftSidebar = () => {
  const data = useDatas();
  const [clickedUser, setClickedUser] = useState({});
  const [showClickedUser, setShowClickedUser] = useState(false);

  const setShowClickedUserFalse = () => {
    setShowClickedUser(false);
  };

  const showUserDetails = (user) => {
    setClickedUser(user);
    setShowClickedUser(true);
  };
  return (
    <div className={styles.sidebar}>
      {showClickedUser ? (
        <UserDetails
          setShowClickedUserFalse={setShowClickedUserFalse}
          user={clickedUser}
        />
      ) : (
        ""
      )}
      <div className={styles.sidebarUser}>
        <div className={styles.userList}>
          <h2>User List</h2>
        </div>
        <div>
          <List
            width={300}
            height={600}
            rowHeight={50}
            rowCount={10000}
            rowRenderer={({ index, style }) => {
              const user = data.data[index];
              return (
                <div
                  className={styles.userName}
                  key={user.id}
                  style={style}
                  onClick={() => showUserDetails(user)}
                >
                  <h4>{`${user.username} (${user.age})`}</h4>
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
