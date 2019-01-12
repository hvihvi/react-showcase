import React, { useEffect, useState } from "react";

/**
 * <> </> is a new shortcut for React.Fragment
 * `useState` is a hook. They all start with "use*"
 * It creates a state for the component StatefulFunctionalComponent with initial value 0
 * It returns 2 values, the 1st reads the state value and the 2nd updates the state
 * `setCounter(counter+1)` vs `setCounter(counter => counter+1)` :
 * passing a function avoids concurrent modification issues
 */
const StatefulFunctionalComponent = () => {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => setCounter(counter => counter + 1);
  const onDecrement = () => setCounter(counter => counter - 1);

  return (
    <>
      Clicked: {counter} times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
};

const StatefulFunctionalComponentRefactored = () => {
  const [counter, onIncrement, onDecrement] = useCounter(0);

  return (
    <>
      Clicked: {counter} times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
};

/**
 * Custom Hook example => reusable in multiple components
 */
const useCounter = initialValue => {
  const [state, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter => counter + 1);
  const decrement = () => setCounter(counter => counter - 1);
  return [state, increment, decrement];
};

/**
 * `useEffect` example :
 * similar to `componentWillMount` `componentWillUnmount` and `componentWillUpdate` combined.
 * It calls the function whenever a new render occurs.
 * In this usage, we need to pass `[counter]`. Otherwise, the component renders, calls `incrementClicks`, which causes a
 * new render, a new call to `incrementClicks`... and the component will infinitely keep rendering.
 * `[counter]` passed as a second argument tells React to call the effect only if a change to an element of the passed
 *  array occured. If previous counter `===` next counter then the effect won't trigger
 */
const StatefulFunctionalComponentSideEffect = () => {
  const [counter, onIncrement, onDecrement] = useCounter(0);
  const [clicks, incrementClicks] = useCounter(0);

  useEffect(incrementClicks, [counter]);

  return (
    <>
      Rendered: {clicks} times Clicked: {counter} times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
};
