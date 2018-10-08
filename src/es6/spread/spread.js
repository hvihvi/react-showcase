export const state = { id: 1, users: [], counter: 0, age: 31 };

// without
export const nextStateNoSpread = {
  id: 2,
  users: state.users,
  counter: state.counter,
  age: state.age
};

// with spread operator
export const nextState = { ...state, id: 2 };

export const incrementId = state => {
  return { ...state, id: state.id + 1 };
};
