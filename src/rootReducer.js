import { combineReducers } from 'redux';
import navigation from './navigation';
import product from './product';
import productSearch from './product-search';

export default combineReducers({
  [navigation.constants.NAME]: navigation.reducer,
  [product.constants.NAME]: product.reducer,
  [productSearch.constants.NAME]: productSearch.reducer,
});
