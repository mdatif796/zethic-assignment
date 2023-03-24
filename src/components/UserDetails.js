import styles from "../styles/userDetails.module.css";

const UserDetails = ({ user, setShowClickedUserFalse }) => {
  return (
    <div className={styles.userDetails}>
      <div className={styles.singleDetails}>
        <p className={styles.cross} onClick={() => setShowClickedUserFalse()}>
          ╳
        </p>
        <div className={styles.name}>
          <h2>{`${user.username}`}</h2>
        </div>
        <div className={styles.userNameDetails}>
          <h4>
            Age: <span className={styles.span}>{user?.age}</span>
          </h4>
          <h4>
            Phone Number:{" "}
            <span className={styles.span}>{user?.phoneNumber}</span>
          </h4>
          <h4>Occupation:</h4>
          <p>
            <strong>
              Job Descriptor:{" "}
              <span className={styles.span}>{user?.occupation}</span>
            </strong>
          </p>

          <h4>Vehicle: </h4>
          <p>
            <strong>
              Age: <span className={styles.span}>{user?.vehicle?.carAge}</span>
            </strong>
          </p>
          <p>
            <strong>
              Manufacturer:{" "}
              <span className={styles.span}>{user?.vehicle?.make}</span>
            </strong>
          </p>
          <p>
            <strong>
              Model: <span className={styles.span}>{user?.vehicle?.model}</span>
            </strong>
          </p>
          <h4>Address:</h4>
          <p>
            <strong>
              Street:{" "}
              <span className={styles.span}>
                {user?.address?.split(",")[0]}
              </span>
            </strong>
          </p>
          <p>
            <strong>
              City:{" "}
              <span className={styles.span}>
                {user?.address?.split(",")[1]}
              </span>
            </strong>
          </p>
          <p>
            <strong>
              Country:{" "}
              <span className={styles.span}>
                {user?.address?.split(",")[2]}
              </span>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
