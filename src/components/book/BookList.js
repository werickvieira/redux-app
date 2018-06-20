import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../../util/formatPrice';
import './BookList.scss';

function BookList({ books }) {
  // const books = list.map(({
  //   id,
  //   name,
  //   description,
  //   price,
  //   thumb,
  // }) => `
  //   <div className="list__item" id=${id}>
  //     <div className="list__item__col">
  //       <h1 className="list__item__name">${name}</h1>
  //       <p className="list__item__description">${description}</p>
  //       <span className="list__item__price">${price}</span>
  //     </div>
  //     <div className="list__item__col">
  //       <img src=${thumb} alt=${name} />
  //     </div>
  //   </div>
  // `).join('');
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
              <div className="book__detail__column">
                <img src={thumb} alt={name} />
              </div>
              <div className="book__detail__column book__detail__column--lg">
                <h1 className="book__detail__name">{name}</h1>
                <p className="book__detail__description">{description}</p>
                <span className="book__detail__price">{formatPrice(price)}</span>
              </div>
            </div>
            <button className="book__button button">Comprar</button>
          </div>
        ))
      }
    </div>
  );
}

BookList.defaultProps = {
  books: [],
};
BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

export default BookList;
