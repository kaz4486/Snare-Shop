import axios from 'axios';
import { API_URL } from '../config/config';

//actions
const reducerName = 'orders';

const createActionName = (actionName) => `app/${reducerName}/${actionName}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const CREATE_ORDER = createActionName('CREATE_ORDER');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = () => ({ type: ERROR_REQUEST });

export const createOrder = (payload) => ({ payload, type: CREATE_ORDER });

//thunks

export const createOrderRequest = (data) => {
  console.log(data);
  return async (dispatch) => {
    dispatch(startRequest({ name: CREATE_ORDER }));
    try {
      let res = await axios.post(`${API_URL}/orders`, data);
      console.log(res.data);
      dispatch(createOrder(res.data));
      dispatch(endRequest({ name: CREATE_ORDER }));
    } catch (e) {
      dispatch(errorRequest({ name: CREATE_ORDER, error: e.message }));
    }
  };
};

const initialState = {
  data: [],
  request: { pending: false, error: null, success: null },
};

export default function ordersReducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...statePart, data: [...action.payload] };
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
