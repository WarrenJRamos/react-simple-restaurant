import React, { useContext, useState } from 'react';

import CartContext from '../../store/cart-context';

import Checkout from './Checkout';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const cartTotal = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const submitOrderHandler = async (data) => {
    setIsSubmitting(true);
    await fetch('https://food-app-react-1d27f-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: data,
        orderedItems: cartContext.items
      })
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearCart();
  };

  const cartItemAddHandler = (item, option) => {
    cartContext.addItem(item, option);
  };

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckingOut(true);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item, 'ONE')}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div class={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
      {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div class={classes.total}>
        <span>Total Amount</span>
        <span>{cartTotal}</span>
      </div>
      {isCheckingOut && <Checkout onClick={props.onCloseCart} onConfirm={submitOrderHandler} />}
      {!isCheckingOut && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <div>
        <p>Successfully sent the order!</p>
        <div class={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClick={props.onCloseCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && !isSubmitting && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;