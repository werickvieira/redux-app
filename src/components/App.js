import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBegin } from '../actions/';
import BookList from './book/BookList';

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
      <div>
        <h1>Book Store</h1>
        { !isFetching ? <h2>Loading...</h2> : null }
        <BookList list={items} />
      </div>
    );
  }
}

App.defaultProps = {
  dispatch: '',
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
