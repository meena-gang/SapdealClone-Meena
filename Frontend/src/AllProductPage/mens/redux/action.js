import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./actionType";

export const getProductData = async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_LOADING,
  });
  try {
    const res = await axios.get(
      "https://sapdealbackend-1.onrender.com/products/shoes"
    );
    //console.log(res.data)
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: res.data
    });
    return res.data;
  } catch (e) {
    dispatch({
      type: GET_PRODUCTS_ERROR,
    });
  }
};
