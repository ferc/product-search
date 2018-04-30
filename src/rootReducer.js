import { combineReducers } from 'redux';
import navigation from './navigation';
import productSearch from './product-search';

export default combineReducers({
  [navigation.constants.NAME]: navigation.reducer,
  [productSearch.constants.NAME]: productSearch.reducer,
});
