import React from "react";
import classes from "./mealitemform.module.css";
import Input from "../../UI/input";

const handleclick = (e) => {
  e.preventDefault();
};

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  );
};

export default MealItemForm;
