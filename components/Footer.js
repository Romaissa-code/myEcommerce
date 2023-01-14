import styles from "../styles/footer.module.css"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
    return (
      <>
        <footer className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.usefullLinks}>
              <h3>Get Help</h3>

              <a href="#">FAQ </a>
              <a href="#">Shipping </a>
              <a href="#">Order Status </a>
              <a href="#">Payment Option </a>
            </div>

            <div className={styles.usefullLinks}>
              <h3>useful links</h3>

              <a href="#">Home</a>
              <a href="#">About-us</a>
              <a href="#">Contact-us</a>
            </div>

            <div className={styles.socialLinks}>
              <h3>Follow us</h3>

              <BsFacebook className={styles.icons} />
              <BsInstagram className={styles.icons} />
              <BsTwitter className={styles.icons} />
            </div>
            <div className={styles.usefullLinks}>
              <h3>useful links</h3>

              <a href="#">Home</a>
              <a href="#">About-us</a>
              <a href="#">Contact-us</a>
            </div>
          </div>
        </footer>
      </>
    );
}
 
export default Footer;