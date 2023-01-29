
import SingleTestemonial from "./SingleTestemonial";
import styles from "../styles/SingleTestemonial.module.css";

const Testemonails = () => {

    return (
      <div className={styles.mainContainer}>
        <div className={styles.title}>
          <h2 className={styles.sectionTitle}>Testemonial</h2>
        </div>
        <div className={styles.gridWrapper}>
          <div className={styles.gridContainer}>
            <SingleTestemonial />
            <SingleTestemonial />
            <SingleTestemonial />
          </div>
        </div>
      </div>
    );
}
 
export default Testemonails;