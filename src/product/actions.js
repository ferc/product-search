import { FETCH_PRODUCT, FETCH_PRODUCT_ERROR, FETCH_PRODUCT_SUCCESS } from './actionTypes';
import fetch from 'isomorphic-unfetch';

export const fetchProduct = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch(`http://localhost:3000/api/items/${encodeURI(id)}`);
    const product = await response.json();

    dispatch(fetchProductSuccess(product, id));
  }
  catch(e) {
    dispatch(fetchProductError('There was an error on fetching the product'));
  }
};

export const fetchProductError = (message) => ({
  type: FETCH_PRODUCT_ERROR,
  message,
});

export const fetchProductSuccess = (product) => ({
  type: FETCH_PRODUCT_SUCCESS,
  product,
});
