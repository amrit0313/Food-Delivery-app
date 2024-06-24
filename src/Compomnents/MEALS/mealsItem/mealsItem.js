import { useContext } from "react";
import classes from "./mealsitem.module.css";
import MealItemForm from "./mealitemform";
import CartContext from "../../../Store/cartContext";
import React from "react";

const MealsItem = (props) => {
  const cartctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm onAddItemToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
