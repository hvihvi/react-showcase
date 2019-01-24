import React from "react";

export const Counter = ({ value, onDecrement, onIncrement }) => (
  <p>
    <CounterText txt={`Clicked: ${value} times`} />
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </p>
);

export const CounterText = ({ txt }) => <b>{txt}</b>;
