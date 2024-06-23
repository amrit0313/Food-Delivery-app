import React, { useRef, useState } from "react";
import classes from "./mealitemform.module.css";
import Input from "../../UI/input";

const MealItemForm = (props) => {
  const totalAmountref = useRef();
  const [amountIsValid, setAmountValid] = useState(true);

  const handleclick = (e) => {
    e.preventDefault();
    const enteredAmount = totalAmountref.current.value;
    const enteredAmountValue = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountValue < 1 ||
      enteredAmountValue > 5
    ) {
      setAmountValid(false);
      return;
    }
    setAmountValid(true);

    props.onAddItemToCart(enteredAmountValue);
  };
  return (
    <form className={classes.form} onSubmit={handleclick}>
      <Input
        ref={totalAmountref}
        label="amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={handleclick}>+Add</button>
      {!amountIsValid && <p>Entered valid amount (1 to 5)</p>}
    </form>
  );
};

export default MealItemForm;
