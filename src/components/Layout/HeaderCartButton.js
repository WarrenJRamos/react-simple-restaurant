import React from 'react';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  const btnIsHighlighted = false;

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  return (
    <button className={btnClasses}>
      <span>Your Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default HeaderCartButton;