import React from "react";

import classes from "./Input.module.css";

// forwardRef allows us to forward the input element reference from this child component to
// its parent component
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
