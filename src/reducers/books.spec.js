// import * as types from '../constants/ActionTypes';
import reducer from '../reducers/books';

describe('books reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      items: [],
      cart: [],
    });
  });
});
