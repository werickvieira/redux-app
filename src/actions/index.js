import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_BOOK_CART,
} from '../constants/ActionTypes';

export const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: { data },
});

export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error },
});

export const fetchBegin = dispatch => (
  fetch('https://api.myjson.com/bins/1f4xm2')
    .then(res => res.json())
    .then(data => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchFailure(error)))
);

export const addBookCart = id => ({
  type: ADD_BOOK_CART,
  payload: { id },
});
