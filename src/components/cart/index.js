import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Cart.scss';

function Cart({ cart }) {
  console.log('cart', cart);
  const { length } = cart;
  return (
    <div className="cart" hidden={length === 0}>
      <h1>CART</h1>
    </div>
  );
}

Cart.defaultProps = {
  cart: [],
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
};

const mapStateCart = state => ({
  cart: state.books.cart,
});

export default connect(mapStateCart)(Cart);
