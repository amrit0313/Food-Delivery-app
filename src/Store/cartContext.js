import React from "react";

const CartContext = React.createContext({
  item: [],
  amount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearItems: () => {},
});

export default CartContext;
