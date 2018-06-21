import { FETCH_SUCCESS, FETCH_FAILURE, ADD_BOOK_CART } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  items: [],
  cart: [],
};

export default function booksReducer(state = initialState, action) {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: true,
        items: action.payload.data,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: true,
        items: [],
      };

    case ADD_BOOK_CART:
      console.log('state', state.cart);
      return {
        ...state,
        cart: [...state.cart, ...state.items.filter(({ id }) => id === action.payload.id)],
      };

    default:
      return state;
  }
}
