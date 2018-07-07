import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatPrice from '../../util/formatPrice';
import './Cart.scss';


function singleSumQuantity(cart, books) {
  return cart.map(item => (
    books
      .filter(book => book.id === item.id)
      .map((e) => {
        const { id, name, price } = e;
        return {
          id,
          name,
          price,
          quantity: item.quantity,
          total: e.price * item.quantity,
        };
      })[0]
  ));
}


function Cart({ cart, books }) {
  console.log('- - - - - - - - - - - - -');
  console.log('CART COMPONENTE', cart);
  console.log('- - - - - - - - - - - - -');
  console.log('books', books);
  const { length } = cart;
  const quantitysSum = singleSumQuantity(cart, books);
  return (
    <div className="cart container" hidden={length === 0}>
      <h1>CART</h1>
      <div className="cart__list">
        {
          quantitysSum.map(e => (
            <div className="cart__item" key={e.id}>
              <div>{e.name}</div>
              <span>{formatPrice(e.total)}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

Cart.defaultProps = {
  cart: [],
  books: [],
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  books: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  cart: state.books.cart,
  books: state.books.items,
});

export default connect(mapStateToProps)(Cart);
