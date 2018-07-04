import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBegin } from '../actions/';
import BookContainer from '../containers/BookContainer';
import Cart from './cart/Cart';
import './App.scss';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBegin);
  }

  render() {
    const { items, isFetching } = this.props;
    return (
      <div className="container">
        <h1>Book Store</h1>
        { !isFetching ? <h2>Loading...</h2> : <BookContainer books={items} /> }
        <Cart />
      </div>
    );
  }
}

App.defaultProps = {
  dispatch: null,
  isFetching: '',
  items: [],
};

App.propTypes = {
  dispatch: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
};

const mapStateToProps = state => ({
  items: state.books.items,
  isFetching: state.books.isFetching,
});

export default connect(mapStateToProps)(App);

// https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
