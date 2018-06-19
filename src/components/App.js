import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBegin } from '../actions/';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.dispatch(fetchBegin);
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        { !this.props.isFetching ? <h2>Loading</h2> : null }
      </div>
    );
  }
}

App.defaultProps = {
  dispatch: '',
  isFetching: '',
};

App.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
};

const mapStateToProps = state => ({
  items: state.books.items,
  isFetching: state.books.isFetching,
});

export default connect(mapStateToProps)(App);
