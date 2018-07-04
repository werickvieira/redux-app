import React from 'react';
import PropTypes from 'prop-types';
import './BooksList.scss';

function BookList({ title, children }) {
  return (
    <div className="books">
      { title ? <h1>{title}</h1> : null }
      { children }
    </div>
  );
}

BookList.defaultProps = {
  children: null,
  title: '',
};

BookList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default BookList;
