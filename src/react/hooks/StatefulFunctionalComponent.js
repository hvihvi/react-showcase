import React, {useState} from 'react'

/**
 * <> </> is a new shortcut for React.Fragment
 * `useState` is a hook. They all start with "use*"
 * It creates a state for the component StatefulFunctionalComponent with initial value 0
 * It returns 2 values, the 1st reads the state value and the 2nd updates the state
 * `setCounter(counter+1)` vs `setCounter(counter => counter+1)` :
 * passing a function avoids concurrent modification issues
 */
const StatefulFunctionalComponent = () => {
  const [counter, setCounter] = useState(0)

  const onIncrement = () => setCounter(counter => counter + 1)
  const onDecrement = () => setCounter(counter => counter - 1)

  return <>
    Clicked: {counter} times
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </>
}