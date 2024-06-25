import Card from "../UI/card";
import MealsItem from "./mealsItem/mealsItem";
import classes from "./available.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Mo:Mo",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Chowmein",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Pizza",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Burger",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Availabe = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Availabe;
