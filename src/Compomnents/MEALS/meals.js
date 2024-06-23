import { Fragment } from "react";
import MealSummary from "./mealSummary";
import Availabe from "./available";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <Availabe />
    </Fragment>
  );
};

export default Meals;
