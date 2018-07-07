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

function manageCart(cart, id) {
  const cartModel = {
    id,
    quantity: 1,
  };

  const existInCart = cart.find(item => item.id === id);

  if (!existInCart) {
    return [
      ...cart,
      cartModel,
    ];
  }

  return cart.map((item) => {
    if (item.id === id) {
      item.quantity += 1;
    }
    return item;
  });
}

function funAddCart(state, payload) {
  return {
    ...state,
    cart: manageCart(state.cart, payload.id),
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
