import React from 'react';
import Card from '../UI/Card';

import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes['meals-summary']}>
      <Card>
        <h2>WR Menu</h2>
        <hr />
        <p>
          Choose from a variety of excellent dishes, cooked by Michelin Star chefs using high-quality ingredients.
        </p>
        <p>
          Today's Speciality: Glazed Strawberry Donuts!
        </p>
      </Card>
    </section>
  );
};

export default MealsSummary;