import uuid4 from 'uuid4';

//selectors

export const getCart = ({ cart }) => cart;
export const getCartTotal = ({ cart }) =>
  cart.reduce((acc, curr) => {
    acc += curr.totalPrice;
    return acc;
  }, 0);

//actions

const reducerName = 'cart';

const createActionName = (actionName) => `app/${reducerName}/${actionName}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_CART = createActionName('LOAD_CART');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const UPDATE_PRODUCT_CART_AMOUNT = createActionName(
  'UPDATE_PRODUCT_CART_AMOUNT',
);
const UPDATE_PRODUCT_CART_COMMENT = createActionName(
  'UPDATE_PRODUCT_CART_COMMENT',
);
const CLEAR_CART = createActionName('CLEAR_CART');

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});
export const loadCart = () => ({ type: LOAD_CART });
export const updateProductCartAmount = (payload) => ({
  type: UPDATE_PRODUCT_CART_AMOUNT,
  payload,
});
export const updateProductCartComment = (payload) => ({
  type: UPDATE_PRODUCT_CART_COMMENT,
  payload,
});
export const clearCart = () => ({ type: CLEAR_CART });

// thunks

const initialState = [];

//reducer

const cartReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = statePart.find(
        (product) => product.id === action.payload.id,
      );
      if (existingProduct) {
        existingProduct.count = existingProduct.count + action.payload.count;
        existingProduct.totalPrice =
          existingProduct.totalPrice + action.payload.totalPrice;
        return statePart;
      } else {
      }
      return [...statePart, { ...action.payload }];
    case REMOVE_FROM_CART:
      return statePart.filter((product) => product.id !== action.payload);
    case LOAD_CART:
      return statePart;
    case UPDATE_PRODUCT_CART_AMOUNT:
      return statePart.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              count: action.payload.count,
              totalPrice: action.payload.totalPrice,
            }
          : product,
      );
    case UPDATE_PRODUCT_CART_COMMENT:
      return statePart.map((product) =>
        product.id === action.payload.id
          ? { ...product, comment: action.payload.comment }
          : product,
      );
    case CLEAR_CART:
      return (statePart = []);
    default:
      return statePart;
  }
};

export default cartReducer;

// export default function cartReducer(statePart = initialState, action = {}) {
//   switch (action.type) {
//     case LOAD_CART:
//       return { ...statePart, data: [...action.payload] };
//     case ADD_TO_CART:
//       return { ...statePart, data: [...statePart.data, action.payload] };
//     case REMOVE_FROM_CART:
//       return {
//         ...statePart,
//         data: [
//           statePart.data.filter((product) => product.id !== action.payload),
//         ],
//       };
//     case START_REQUEST:
//       return {
//         ...statePart,
//         request: { pending: true, error: null, success: false },
//       };
//     case END_REQUEST:
//       return {
//         ...statePart,
//         request: { pending: false, error: null, success: true },
//       };
//     case ERROR_REQUEST:
//       return {
//         ...statePart,
//         request: { pending: false, error: action.error, success: false },
//       };
//     default:
//       return statePart;
//   }
// }
