import { useContext } from "react";
import classes from "./cart.module.css";
import Modal from "../UI/modal";
import CartContext from "../../Store/cartContext";
import CartItem from "./cartItem";

const Cart = (props) => {
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

  return (
    <Modal Close={props.Close}>
      <div className={classes["cart-items"]}>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.Close}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Buy</button>}
      </div>
    </Modal>
  );
};

export default Cart;
