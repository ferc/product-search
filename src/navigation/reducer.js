import productSearch from '../product-search';

const initialState = {
  query: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productSearch.actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};
