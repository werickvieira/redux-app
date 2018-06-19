import { FETCH_SUCCESS, FETCH_FAILURE } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  items: [],
};

export default function books(state = initialState, action) {
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
    default:
      return state;
  }
}
