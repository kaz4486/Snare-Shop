//selectors

//actions

const reducerName = 'cart';

const createActionName = (actionName) => `app/${reducerName}/${actionName}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_CART = createActionName('LOAD_CART');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

// thunks

const initialState = {
  data: [],
  request: { pending: false, error: null, success: false },
};

//reducer

export default function cartReducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_CART:
      return { ...statePart, data: [...action.payload] };
    case ADD_TO_CART:
      return { ...statePart, data: [...statePart.data, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...statePart,
        data: [
          statePart.data.filter((product) => product.id !== action.payload),
        ],
      };
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: false },
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: false },
      };
    default:
      return statePart;
  }
}
