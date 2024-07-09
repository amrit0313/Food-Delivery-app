import { useContext, useEffect, useState } from "react";
import classes from "./headercartbutton.module.css";
import CartIcon from "../CART/cartIcon";
import CartContext from "../../Store/cartContext";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  console.log(cartCtx);
  const numberOfItemsInCart = cartCtx.item.reduce((current, item) => {
    return current + item.amount;
  }, 0);
  const { item } = cartCtx;
  const buttonClass = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  } `;
  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [item]);

  return (
    <button className={buttonClass} onClick={props.onClic}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default CartButton;
