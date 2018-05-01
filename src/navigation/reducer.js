import productSearch from '../product-search';

const initialState = {
  query: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productSearch.actionTypes.FETCH_PRODUCTS_SUCCESS:
      if (typeof window !== 'undefined') {
        window.history.pushState(action.query, `Product Search - ${action.query}`, `/items?q=${action.query}`);
      }

      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};
