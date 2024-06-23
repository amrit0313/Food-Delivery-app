import { Fragment } from "react";
import CartButton from "./headercartbutton";
import mealsImage from "../../Assets/meals.jpg";
import classes from "./header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>AmrtzMeals</h1>
        <CartButton onClic={props.onAct} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="here would be foods for you" />
      </div>
    </Fragment>
  );
};

export default Header;
