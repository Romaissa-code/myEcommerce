import { createSlice } from "@reduxjs/toolkit";
import data from "../../data"; 
const initialState = {
  shownItems: data,
  allItems:data,
  searchTerm: "",
  cartItems: [],
  total: 0,

};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
     const { id, price, name, url ,quantity,size }=action.payload;
     const totItemPrice=price*parseInt(quantity); 
      state.cartItems = [
        { id, name, url, quantity, size, totItemPrice,price },
        ...state.cartItems,
      ];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const newCart = state.cartItems.filter((item) => {
        return item.id !== id;
      });
      state.cartItems = newCart;
    },
    getSearchTerm: (state, action) => {
      const value = action.payload;
      state.searchTerm = value;
    },
    filterItems: (state) => {
      if (state.searchTerm != "") {
        const filtered = state.allItems.filter((item) => {
          if (item.category === state.searchTerm) return item;
        });
        state.shownItems = filtered;
      }
      if(state.searchTerm==="All") state.shownItems=state.allItems; 
      
    },
    setCategory: (state, action) => {
      const key = action.payload;
      if (key === "All") {
        state.shownItems = state.allItems;
      } else {
        const cat = state.allItems.filter((item) => {
          if (item.category === key) return item;
        });
        state.shownItems = cat;
      }
    },
    caluclateTotal: (state) => {
 
      let total = 0; 
      state.cartItems.forEach((item) => {
        total += item.price * parseInt(item.quantity);
    
      });
      state.total = total.toFixed(2);
    },
  },
});


export default cartSlice.reducer; 
export const {
  addToCart,
  removeItem,
  getSearchTerm,
  filterItems,
  setCategory,
  caluclateTotal,
} = cartSlice.actions; 