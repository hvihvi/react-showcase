/**
 * ACTION
 * An action is an object that contains a `type` property. It's the semantic value of the action described
 * You can fill the action with anything else (`increment` here)
 */
// this is the semantic value of the action (action.type)
const ON_INCREMENT = "ON_INCREMENT";
// this is an action
export const onIncrement = {
  type: ON_INCREMENT,
  increment: 1
};
const ON_DECREMENT = "ON_DECREMENT";
export const onDecrement = {
  type: ON_DECREMENT,
  decrement: 1
};

/**
 * Action Creators are functions that take any input and return an action
 * A pattern used to isolate complexity from the component
 */
const actionCreatorExample = value => (value > 0 ? onIncrement : onDecrement);

const initialState = {
  count: 0,
  name: "Hugo"
};

/**
 * REDUCER
 * A reducer is a function : (state, action) => nextState
 * This provides predictability, any given app state is reproductible as an initial state and a succession of actions
 */
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ON_INCREMENT:
      // never mutate state : always return a new instance
      // redux does equality checks for performance, updates won't trigger if it's the same instance
      return { ...state, count: state.count + action.increment };
    case ON_DECREMENT:
      return { ...state, count: state.count - action.decrement };
  }
  return state;
};

export default counter;
