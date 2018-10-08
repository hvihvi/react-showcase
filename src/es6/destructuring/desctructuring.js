const state = { id: 1, users: [], counter: 0, age: 31 };

// no destructuring
const aUser = state.users;
const aCounter = state.counter;

// destructuring
const { users, counter } = state;

// exports the 2 destructured variables
export { users, counter };

// destructuring with spread
const { id, ...rest } = state;

export { rest };
