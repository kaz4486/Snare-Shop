import { combineReducers, createStore } from 'redux';
import cartReducer from './cartRedux';
import initialState from './initialState';
import productsReducer from './productsRedux';

const subreducers = { products: productsReducer, cart: cartReducer };

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
