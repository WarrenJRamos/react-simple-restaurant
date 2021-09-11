import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item, option) => { },
  removeItem: (id) => { },
  clearCart: () => { }
});

export default CartContext;