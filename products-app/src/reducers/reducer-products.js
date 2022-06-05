import { CHANGE_PAGE, FETCH_PRODUCTS, SORT_CATEGORY, SORT_PRODUCTS } from "../actions";
import axios from "axios";

const defaultState = [];

const fetchProducts = () => {
  axios.get("http://localhost:8000/products").then(response => {
    defaultState.push(response.data)
  })
};

fetchProducts();


const productsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return state;
    case SORT_PRODUCTS:
      return [action.payload.data];
    case SORT_CATEGORY:
      const newCount = action.payload.data.length;
      return [action.payload.data, {count: newCount}];
    case CHANGE_PAGE:
      return [action.payload.data];
    default:
      return state;
  }
}

export default productsReducer;