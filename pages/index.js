import styles from "../styles/Home.module.css";

import SingleItem from "../components/SingleItem";
import Modal from "../components/Modal";
import { setCategory } from "../components/features/cart/cartSlice";
import Footer from "../components/Footer";
import Testemonails from "../components/Testemonials";
import Add from "../components/Add";
import { useSelector ,useDispatch} from "react-redux";

// this is the method to fetch data from an API 
//  export  const getStaticProps = async () => {
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/photos?_limit=8"
//     );
//     const data = await res.json();
//     return {
//       props: { items:data},
//     };
//   };
  



const Home = ( ) => {
 const {shownItems ,cartItems ,searchTerm} =useSelector((store)=>store.cart); 
 const dispatch= useDispatch();
 

  return (
    <>
      <div className={styles.mainIntro}>
        <Modal />

        <div className={styles.introContent}>
          <h1>Shope Online with shope.com</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            repudiandae numquam soluta, nihil iusto dolore eum assumenda rerum
          </p>
          <button className="btn btn-danger">View More </button>
        </div>
      </div>

      <section className={`${styles.articles} my-5 `}>
        <div className={styles.title}>
          <h2 className={`${styles.sectionTitle}`} id="items">Featured Productes</h2>
        </div>

        <div className={styles.categories}>
          <button
            className="btn btn-outline-success"
            onClick={() => dispatch(setCategory("All"))}
          >
            All
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => dispatch(setCategory("Men"))}
          >
            Men
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => dispatch(setCategory("Women"))}
          >
            Women
          </button>
        </div>
        <div
          //row row-cols-md-3 row-cols-lg-4 row-cols-sm-2  justify-content-center
          className={styles.gridContainer} 
        >
          {shownItems.map((item) => {
            return <SingleItem {...item} key={item.id} />;
          })}
        </div>
      </section>

      <section>
        <Add />
      </section>

      <section>
        <Testemonails />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );

}

export default Home;
