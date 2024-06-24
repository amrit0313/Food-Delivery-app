import { useReducer } from "react";
import CartContext from "./cartContext";

const cartsItem = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if ((action.type = "ADD")) {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

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
    console.log(cartState.totalAmount);
  };

  const removeItemFromCart = (id) => {};

  const cartItems = {
    item: cartState.items,
    totalAmount: cartState.totalAmount.toFixed(2),
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
