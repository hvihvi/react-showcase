import { incrementId } from "./spread";

it("should create a new state with mutated id to 2", () => {
  //given
  const state = { id: 1, users: [], counter: 0, age: 31 };
  //when
  const nextState = { ...state, id: 2 };
  //then
  expect(nextState).toEqual({ age: 31, counter: 0, id: 2, users: [] });
});

it("incrementId should return a clone of state with add 1 to id", () => {
  //given
  const state = { id: 1, users: [], counter: 0, age: 31 };
  //when
  const nextState = incrementId(state);
  //then
  expect(nextState).toEqual({ age: 31, counter: 0, id: 2, users: [] });
});
