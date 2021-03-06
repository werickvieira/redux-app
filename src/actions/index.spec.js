import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../constants/ActionTypes';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('books actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create FETCH_SUCCESS when fetching books has been done', async () => {
    const expected = {
      payload: { data: { books: [] } },
      type: types.FETCH_SUCCESS,
    };

    fetchMock
      .getOnce(
        'https://api.myjson.com/bins/1f4xm2',
        {
          books: [],
        },
      );
    const store = mockStore({ books: [] });
    const response = await store.dispatch(actions.fetchBegin);
    expect(response).toEqual(expected);
  });

  it('should create an action ADD_BOOK_CART', () => {
    const payload = {
      id: 15,
    };
    const expected = {
      type: types.ADD_BOOK_CART,
      payload,
    };
    expect(actions.addBookCart(15)).toEqual(expected);
  });

  it('should create an action FETCH_FAILURE', () => {
    const payload = {
      error: 'Message Error',
    };
    const expected = {
      type: types.FETCH_FAILURE,
      payload,
    };
    expect(actions.fetchFailure('Message Error')).toEqual(expected);
  });
});
