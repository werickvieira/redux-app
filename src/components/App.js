import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBegin } from '../actions/';

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
        <h1>App</h1>
        { !isFetching ? <h2>Loading...</h2> : null }
        {
          items.map(({ id, price }) => <div key={id}>{price}</div>)
        }
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
