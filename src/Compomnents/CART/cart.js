import { useContext } from "react";
import classes from "./cart.module.css";
import Modal from "../UI/modal";
import CartContext from "../../Store/cartContext";

const Cart = (props) => {
  const cartctx = useContext(CartContext);

  const totalAmount = `$${cartctx.totalAmount}`;
  const hasItem = cartctx.item.length > 0;

  const cartItems = (
    <ul>
      {cartctx.item.map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal Close={props.Close}>
      {cartItems}
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
