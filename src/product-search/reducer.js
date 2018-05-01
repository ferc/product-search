import { FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from './actionTypes';

const initialState = {
  categories: [],
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        categories: action.products.categories,
        products: action.products.items,
      };
    default:
      return state;
  }
};
