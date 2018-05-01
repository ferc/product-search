import { FETCH_PRODUCT_ERROR, FETCH_PRODUCT_SUCCESS } from './actionTypes';

const initialState = {
  categories: [],
  product: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        categories: action.product.categories,
        product: action.product.item,
      };
    default:
      return state;
  }
};
