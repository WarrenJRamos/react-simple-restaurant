import React, { useEffect, useState } from "react";

import "../../utilities.css";
import classes from "./AvailableMeals.module.css";

import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://food-app-react-1d27f-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("No data acquired");
      }

      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes["loading-meals"]}>
        <p>Loading menu...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes["http-error"]}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <React.Fragment>
      <div className={classes["available-meals"]}>
        <div className="container">
          <ul>{mealsList}</ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AvailableMeals;
