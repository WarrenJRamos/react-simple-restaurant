import React from 'react';

import classes from './MealItem.module.css';

import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  return (
    <li className={classes['meal']}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div className={classes['meal-form']}>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;