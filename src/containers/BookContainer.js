import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBookCart } from '../actions/';
import BooksList from '../components/book/BooksList';
import BookItem from '../components/book/BookItem';

function BookContainer({ books, addBookCart }) {
  return (
    <div className="container">
      <BooksList title="">
        {
          books.map(book => (
            <BookItem
              key={book.id}
              book={book}
              onAddToCartClicked={addBookCart}
            />
          ))
        }
      </BooksList>
    </div>
  );
}

BookContainer.defaultProps = {
  books: [],
  addBookCart: null,
  // onAddBookCart: null,
};

BookContainer.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  addBookCart: PropTypes.func,
  // onAddBookCart: PropTypes.func,
};

// const mapDispatchToProps = dispatch => (
//   {
//     onAddBookCart: (id) => {
//       dispatch(addBookCart(id));
//     },
//   }
// );

export default connect(null, { addBookCart })(BookContainer);
