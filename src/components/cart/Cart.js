import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Cart.scss';

function Cart({ cart, books }) {
  console.log('- - - - - - - - - - - - -');
  console.log('CART COMPONENTE', cart);
  console.log('- - - - - - - - - - - - -');
  console.log('books', books);
  const { length } = cart;
  return (
    <div className="cart container" hidden={length === 0}>
      <h1>CART</h1>
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
