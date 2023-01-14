
import Modal from "../components/Modal";
import styles from "../styles/singleItem.module.css";
import data from "../components/data"
import { addToCart } from "../components/features/cart/cartSlice";
import { useDispatch} from "react-redux";
import { useState } from "react";

export const getStaticPaths = async () => {
  // this is used to create a page for every item
  const paths=data.map((singleData)=>{
   return {
     params: { id: singleData.id.toString() },
   };})

   return {
     paths,
     fallback:false
   }
  }; 

  export const getStaticProps=async(context)=>{
    const id=context.params.id; 
     let index=id-1;
     return {
       props: { items:data[index] },
     };
  }


const singleItem = ({items}) => {
  const [size,setSize] =useState("M"); 
  const [quantity,setQuentitiy]= useState("1"); 

  const dispatch=useDispatch(); 
  const {id,name,url,price} =items; 
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.singleWrapper}>

          <div className={styles.singleImg}>
            <img src={url} alt={name} className="img-fluid" />
          </div>
          
          <Modal />
          <div className={styles.detail} style={{ lineHeight: "1.7rem" }}>
            <h2>{name}</h2>
            <h4>${price}</h4>

            <div className="my-3">
              <label>Select Size :</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="mx-2"
              >
                <option>XXL</option>
                <option>XL</option>
                <option>L</option>
                <option>M</option>
                <option>S</option>
              </select>
            </div>
            <div>
                <input
                  type="number"
                  placeholder="1"
                  className="me-4 "
                  value={quantity}
                  onChange={(e) => setQuentitiy(e.target.value.toString())}
                  style={{ width: "50px", height: "100%" }}
                />
              
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                aria-controls="offcanvasExample"
                onClick={() => {dispatch(addToCart({ id, name, url, price,size,quantity }))
                     
              }}
              >
                Add to cart
              </button>
            </div>
            <div className={styles.decriprion}>
              <h5>Item Description</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate neque aperiam commodi consectetur fugit, blanditiis
                magnam saepe eaque velit praesentium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default singleItem;
