import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { filterItems, caluclateTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";
// import { createStore } from "redux";
// import reducer from "./reducer";

// import { Provider } from "react-redux";
//  const initalStore = {
//    people: "amin",
//    total: 25,
//  };

//  const store= createStore(reducer,initalStore); 

const Layout = ({ children }) => {
  const { searchTerm, cartItems } = useSelector((store) => store.cart);
   const dispatch= useDispatch(); 

   useEffect(()=>{
     dispatch(filterItems());
   },[searchTerm])

  useEffect(() => {
    dispatch(caluclateTotal());
  }, [cartItems]);
  
  return (
    <>
      {/* <Head>
        <title>E-commerce</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head> */}
      <div >
        <NavBar />
        <div> {children}</div>
      </div>
    </>
  );
};

export default Layout;
