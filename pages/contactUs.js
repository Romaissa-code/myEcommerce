import styles from "../styles/about.module.css"
import { AiOutlineClockCircle } from "react-icons/ai";
import {IoLocationOutline} from "react-icons/io5"
import {AiOutlineMail } from "react-icons/ai"
import { FiPhone } from "react-icons/fi";
const contactUs = () => {
    return (
      <>
        <header className={styles.head}>
          <h1> Let's talk</h1>
        </header>
        <main className={styles.container}>
          <div className={styles.content}>
            <div>
              <h3 className={styles.title}>Get in touch</h3>
              <h5>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
                ducimus!
              </h5>
              <div className={styles.aboutContent}>
                <p>
                  <IoLocationOutline /> 24 jump street.USA
                </p>
                <p>
                  <AiOutlineMail /> contact@gmail.com
                </p>
                <p>
                  <FiPhone /> +235565365253
                </p>
                <p>
                  <AiOutlineClockCircle /> Monday to Saturday from 9am to 9pm
                </p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.322783480337!2d3.1410087765126797!3d36.73882257226469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e52868513cda5%3A0x164fc5d3522a93aa!2sArdis%20Mall!5e0!3m2!1sfr!2sdz!4v1671902061989!5m2!1sfr!2sdz"
              width="600"
              height="450"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </main>
      </>
    );
}
 
export default contactUs;