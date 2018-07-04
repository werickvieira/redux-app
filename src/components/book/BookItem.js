import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../../util/formatPrice';
import './BookItem.scss';

function BookItem({ book, onAddToCart }) {
  const {
    id,
    name,
    description,
    price,
    thumb,
  } = book;
  return (
    <div className="book__item">
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
      <button className="book__button button" onClick={() => onAddToCart(id)}>Comprar</button>
    </div>
  );
}

BookItem.defaultProps = {
  book: {},
  onAddToCart: null,
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    thumb: PropTypes.string,
  }),
  onAddToCart: PropTypes.func,
};

export default BookItem;
