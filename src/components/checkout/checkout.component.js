import React from 'react';
import { connect } from 'react-redux';

import './checkout.styles.scss';

const Checkout = () => {};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(Checkout);
