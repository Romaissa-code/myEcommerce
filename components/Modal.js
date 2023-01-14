import styles from "../styles/singleModal.module.css"
import { BsTrash } from "react-icons/bs";
import { useSelector ,useDispatch } from "react-redux";
import {removeItem} from "./features/cart/cartSlice"; 

const Modal = () => {
     const {total ,cartItems}=useSelector((store)=>store.cart); 

     const dispatch=useDispatch();
    

 
    return (
      <>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Your Card
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {cartItems.map((singleCard, index) => {
              const { id, name, url, quantity, size, totItemPrice } =
                singleCard;
              return (
                <div key={index} className={styles.singleCard}>
                  <img src={url} alt="img" className={styles.cardImg} />
                  <div className={styles.cardBody}>
                    <div>
                      <h5 className="mb-3">{name}</h5>

                      <div className={styles.cardInfo}>
                        <p>Amount: {quantity} </p>
                        <p>size: {size}</p>
                      </div>

                      <h6>Total Price: ${totItemPrice}</h6>
                    </div>

                    <button style={{ background: "none", border: "none" }}>
                      <BsTrash
                        style={{ fontSize: "25px", color: "#FFC93C" }}
                        onClick={() => dispatch(removeItem(id))}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
            <div className={styles.underline}></div>
            <div className={styles.total}>
              <h4>Total price: ${total}</h4>
              <button className="btn btn-danger ">Buy Now</button>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Modal;