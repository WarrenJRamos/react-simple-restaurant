import React from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  return (
    <form>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button className={classes.button}>Add to order</button>
    </form>
  );
};

export default MealItemForm;