import React from 'react';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const btnIsHighlighted = false;

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  return (
    <button className={btnClasses} onClick={props.onClick} >
      <span>Your Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default HeaderCartButton;