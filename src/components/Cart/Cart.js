import React from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>{[
    { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
  ].map(item => <li>{item.name}</li>)}</ul>;

  return (
    <Modal onClick={props.onCloseCart}>
      {cartItems}
      <div class={classes.total}>
        <span>Total Amount</span>
        <span>99.99</span>
      </div>
      <div class={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;