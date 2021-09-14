import React from "react";

import "../../utilities.css";
import classes from "./Meals.module.css";

import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <div className={classes.meals}>
      <div className="container">
        <MealsSummary />
        <AvailableMeals />
      </div>
    </div>
  );
};

export default Meals;
