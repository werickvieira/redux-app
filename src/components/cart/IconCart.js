import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './IconCart.scss';

function extractQuantity(cart) {
  return cart.reduce((prev, curr) => {
    const { quantity } = curr;
    return prev + quantity;
  }, 0);
}

function IconCart({ quantity }) {
  return (
    <i className="fas fa-cart-plus fa-3x"><span>{quantity}</span></i>
  );
}

IconCart.defaultProps = {
  quantity: 0,
};

IconCart.propTypes = {
  quantity: PropTypes.number,
};

const mapStateToProps = state => ({
  quantity: extractQuantity(state.books.cart),
});

export default connect(mapStateToProps)(IconCart);
