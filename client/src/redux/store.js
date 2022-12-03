import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import cartReducer from './cartRedux';
import productsReducer from './productsRedux';
import thunk from 'redux-thunk';
import ordersReducer from './orderRedux';

const subreducers = {
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
