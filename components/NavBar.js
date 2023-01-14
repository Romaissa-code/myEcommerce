
import Link from "next/link";
import style from "../styles/navBar.module.css"; 
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { getSearchTerm } from "./features/cart/cartSlice";
const NavBar = () => {
  const [term,setTerm] =useState('All');
  const dispatch =useDispatch(); 

  const submitHnadler=(e)=>{
     e.preventDefault();
  }



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-lg">
        <a className="navbar-brand" href="#">
          Shope.com
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-5  ">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                Home{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link href="./aboutUs" className="nav-link" aria-current="page">
                About-Us{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link href="./contactUs" className="nav-link" aria-current="page">
                Contact-Us{" "}
              </Link>
            </li>
          </ul>
          <form className={`d-flex ${style.cart}`} onSubmit={submitHnadler}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
            <button
              className="btn btn-dark"
              type="submit"
              onClick={() => {
                dispatch(getSearchTerm(term));
                setTerm("");
              }}
            >
              
              <a   style={{ color: "white" }}href="#items">Search</a>
              
            </button>
          </form>
          <a
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
            className="mx-4"
            style={{ fontSize: "30px" }}
          >
            <BsCart4 />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

