import styles from "../styles/SingleTestemonial.module.css";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { FaQuoteLeft } from "react-icons/fa";

const SingleTestemonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.quote}>
        <FaQuoteLeft />
      </div>

      <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nihil.
      </div>
      <div className={styles.userDetail}>
        <div className={styles.userImg}>
          <img src="./images/model.jpg" alt="an imge" />
        </div>

        <div className={styles.userInfo}>
          <h3>Lorem ipsum</h3>
          <p className={styles.icons}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestemonial;
