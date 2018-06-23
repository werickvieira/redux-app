import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_BOOK_CART,
} from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  items: [],
  cart: [],
};


function funAddCart(state, payload) {
  const hasItemInCart = state.cart.filter(({ id }) => id === payload.id);
  if (hasItemInCart.length === 0) {
    return {
      ...state,
      cart: [...state.cart, {
        id: payload.id,
        quantity: 1,
      }],
    };
  }

  // return {
  //   ...state,
  //   cart: [...state.cart, ...hasItemInCart[0].quantity += 1],
  // };
}

export default function booksReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: true,
        items: payload.data,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: true,
        items: [],
      };

    case ADD_BOOK_CART:
      return funAddCart(state, payload);
      // return {
      //   ...state,
      //   cart: [...state.cart, ...state.items.filter(({ id }) => id === payload.id)],
      // };

    default:
      return state;
  }
}
