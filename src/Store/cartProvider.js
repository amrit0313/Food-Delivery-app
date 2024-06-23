import { useReducer } from "react";
import CartContext from "./cartContext";

const cartsItem = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if ((action.type = "ADD")) {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
};
const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, cartsItem);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
    console.log(cartState.items);
  };

  const removeItemFromCart = (id) => {};

  const cartItems = {
    item: cartState.items,
    amount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartItems}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
