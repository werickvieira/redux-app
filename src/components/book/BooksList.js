import React from 'react';
import PropTypes from 'prop-types';
import './BooksList.scss';

function BooksList({ title, children }) {
  return (
    <div className="books">
      { title ? <h1>{title}</h1> : null }
      { children }
    </div>
  );
}

BooksList.defaultProps = {
  children: null,
  title: '',
};

BooksList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default BooksList;
