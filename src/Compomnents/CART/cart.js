import React, { useContext, useState } from "react";
import classes from "./cart.module.css";
import Modal from "../UI/modal";
import CartContext from "../../Store/cartContext";
import CartItem from "./cartItem";
import Checkout from "./checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cartctx = useContext(CartContext);

  const totalAmount = `$${cartctx.totalAmount}`;
  const hasItem = cartctx.item.length > 0;

  const addItemHandler = (item) => {
    cartctx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartctx.removeItem(id);
  };

  const cartItems = (
    <ul>
      {cartctx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-9364c-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItem: cartctx.item,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);

    cartctx.clearItems();
  };
  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.Close}>
        Close
      </button>
      {hasItem && (
        <button className={classes.button} onClick={orderHandler}>
          Buy
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      <div className={classes["cart-items"]}>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.Close} />
      )}
      {!isCheckout && modalAction}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p> sending order data...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully added to cart</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.Close}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal Close={props.Close}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
