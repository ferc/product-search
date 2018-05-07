import { FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from './actionTypes';
import fetch from 'isomorphic-unfetch';

export const fetchProducts = (query = '') => async (dispatch, getState) => {
  try {
    const response = await fetch(`${process.env.API_ENDPOINT}/items?q=${encodeURI(query)}`);
    const products = await response.json();

    dispatch(fetchProductsSuccess(products, query));
  }
  catch(e) {
    dispatch(fetchProductsError('There was an error on fetching products'));
  }
};

export const fetchProductsError = (message) => ({
  type: FETCH_PRODUCTS_ERROR,
  message,
});

export const fetchProductsSuccess = (products, query) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
  query,
});
