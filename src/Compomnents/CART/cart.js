import classes from "./cart.module.css";
import Modal from "../UI/modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ name: "Sushi", amount: "2", price: "22" }].map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal Close={props.Close}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.Close}>
          Close
        </button>
        <button className={classes.button}>Buy</button>
      </div>
    </Modal>
  );
};

export default Cart;
