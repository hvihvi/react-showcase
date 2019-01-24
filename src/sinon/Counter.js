import React from "react";

export const Counter = ({ value, onDecrement, onIncrement }) => (
  <p>
    Clicked: {value} times
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </p>
);
