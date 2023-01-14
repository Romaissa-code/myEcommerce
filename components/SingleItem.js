import styles from "../styles/singleItem.module.css";

import Link from "next/link";
import { RiStarSFill,RiStarSLine} from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "./features/cart/cartSlice";
import Confirmation from "./Confirmation";

const SingleItem = (item) => {
   const dispatch= useDispatch();
  
  // const {card,setCard} =item;
  const{
    id, url, name,price
  } = item;
  // size and quantity are set by default 
  const quantity= 1;
  const size="L";
  const clickHandler=()=>{
    dispatch(addToCart({ id, url, name, price, quantity ,size}));

      
  }
  return (
    <div className={`${styles.singleContainer}`}>
      <div className={styles.imgContainer}>
        <img src={url} alt={name} />
      </div>

      <div className={`${styles.singleBody}`}>
        <h5>{name}</h5>
        <h6>${price}</h6>

        <div className={styles.singleReview}>
          <p>
            <RiStarSFill
              className={styles.icon}
            />
            <RiStarSFill
              className={styles.icon}
            />
            <RiStarSFill
              className={styles.icon}
            />
            <RiStarSFill
              className={styles.icon}
            />
            <RiStarSLine
              className={styles.icon}
            />
          </p>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => clickHandler()}
            style={{ background: "none", border: "none" }}
          >
            <BsCart4 style={{ fontSize: "25px", background: "none" }} />
          </button>
          <Confirmation />
        </div>
        <Link href={`/${id}`}>
          <button className="btn btn-outline-danger">details</button>
        </Link>
      </div>
    </div>
  );
};
export default SingleItem;
