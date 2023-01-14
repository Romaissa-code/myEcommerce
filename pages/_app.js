import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/colors.css"
import {store} from "../components/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {


  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
