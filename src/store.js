import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

export const initStore = (initialState = {}) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));
};
