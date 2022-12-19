import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import cartReducer from './cartRedux';
import productsReducer from './productsRedux';
import thunk from 'redux-thunk';
import ordersReducer from './orderRedux';
import brandsReducer from './brandRedux';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const subreducers = {
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  brands: brandsReducer,
};

const persistConfig = {
  key: 'cartPersist',
  storage,
};

const rootReducer = combineReducers(subreducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export const persistor = persistStore(store);
