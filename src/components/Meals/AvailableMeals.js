import React from 'react';

import '../../utilities.css';
import classes from './AvailableMeals.module.css';

import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Glazed Donut',
    description: 'Donut with a fun glaze',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Strawberry Donut',
    description: 'The chef\'s favorite!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Chocolate Donut',
    description: 'Rich ferrero chocolate flavored donut',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Frozen Donut',
    description: 'Try at your own risk',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) =>
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  );

  return (
    <React.Fragment>
      <div className={classes['available-meals']}>
        <div className='container'>
          <ul>{mealsList}</ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AvailableMeals;