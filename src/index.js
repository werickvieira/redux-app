import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// store.subscribe(() => {
//   console.log('mudo', store.getState());
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
