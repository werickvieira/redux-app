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
  console.log('state', state);
  const bookInCart = state.cart.filter(({ id }) => id === payload.id);
  if (bookInCart.length === 0) {
    return {
      ...state,
      cart: [...state.cart, {
        id: payload.id,
        quantity: 1,
      }],
    };
    // return Object.assign({}, state, {
    //   cart: state.cart.concat({
    //     id: payload.id,
    //     quantity: 1,
    //   }),
    // });
  }
  // console.log('...state.cart', ...state.cart);
  // console.log('state.cart.quantity', state.cart[0].quantity);
  // console.log('_______');
  return {
    ...state,
    cart: [...state.cart, ...state.cart[0].quantity += 1],
  };
}


// return getAddedIds(state.cart).map(id =>
//   Object.assign({}, getProduct(state.products, id), {
//     quantity: getQuantity(state.cart, id)
//   })
// )

// return getAddedIds(state.cart).map(id => ({
//   ...getProduct(state.products, id),
//   quantity: getQuantity(state.cart, id)
// }))


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
