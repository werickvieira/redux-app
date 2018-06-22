import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import formatPrice from '../../util/formatPrice';
import { addBookCart } from '../../actions/';
import './BookList.scss';

function BookList({ books, onAddBookCart }) {
  return (
    <div className="books">
      {
        books.map(({
          id,
          name,
          description,
          price,
          thumb,
        }) => (
          <div className="book__item" id={id} key={id}>
            <div className="book__detail">
              <div className="book__column">
                <img src={thumb} alt={name} />
              </div>
              <div className="book__column book__column--lg">
                <h1 className="book__detail__name">{name}</h1>
                <p className="book__detail__description">{description}</p>
                <span className="book__detail__price">{formatPrice(price)}</span>
              </div>
            </div>
            <button className="book__button button" onClick={() => onAddBookCart(id)}>Comprar</button>
          </div>
        ))
      }
    </div>
  );
}

BookList.defaultProps = {
  books: [],
  onAddBookCart: null,
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  onAddBookCart: PropTypes.func,
};

const mapDispatchToProps = dispatch => (
  {
    onAddBookCart: (id) => {
      dispatch(addBookCart(id));
    },
  }
);

export default connect(null, mapDispatchToProps)(BookList);
