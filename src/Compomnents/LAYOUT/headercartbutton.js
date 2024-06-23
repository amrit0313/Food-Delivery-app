import classes from "./headercartbutton.module.css";
import CartIcon from "../CART/cartIcon";
import { useContext } from "react";
import CartContext from "../../Store/cartContext";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);
  const numberOfItemsInCart = cartCtx.item.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClic}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default CartButton;
