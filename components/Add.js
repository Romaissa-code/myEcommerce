import { BsArrowRight } from "react-icons/bs";
import styles from "../styles/add.module.css"
const Add = () => {
  return (
    <>
      <div className={styles.adWrapper}>
      <div className={styles.ad}>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta
          
        </p>
        <button className="btn btn-danger">
          click for more <BsArrowRight />
        </button>
      </div>
      </div>
    </>
  );
};

export default Add;
