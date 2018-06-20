import React from 'react';
import PropTypes from 'prop-types';
import './BookList.scss';

function BookList({ list }) {
  console.log('list', list);
  return (
    <div className="list">
      <h1 className="list__title">Book List</h1>
    </div>
  );
}

BookList.defaultProps = {
  list: [],
};
BookList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default BookList;
