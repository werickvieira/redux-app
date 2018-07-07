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

function incrementQuantity(books, target) {
  return books.map((item) => {
    if (item.id === target) {
      item.quantity += 1;
    }
    return item;
  });
}

function funAddCart(state, payload) {
  console.log('newState', state);
  const existInCart = state.cart.filter(({ id }) => id === payload.id);
  const cartModel = {
    id: payload.id,
    quantity: 1,
  };
  if (existInCart.length === 0) {
    return {
      ...state,
      cart: [...state.cart, cartModel],
    };
  }
  return {
    ...state,
    cart: incrementQuantity(state.cart, payload.id),
  };
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
      
    default:
      return state;
  }
}
