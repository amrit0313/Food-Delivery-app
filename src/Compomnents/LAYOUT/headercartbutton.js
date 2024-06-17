
import classes from "./headercartbutton.module.css"
import CartIcon from "../CART/cartIcon";

const CartButton = props =>{

    return(
        <button className={classes.button}>
            <span className={classes.icon}>
                < CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>3</span>


        </button>
    )
};

export default CartButton;