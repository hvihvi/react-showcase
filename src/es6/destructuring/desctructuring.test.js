import { counter, rest, users } from "./desctructuring";

it("should read destructured objects variable", () => {
  expect(users).toEqual([]);
  expect(counter).toEqual(0);
  expect(rest).toEqual({ users: [], counter: 0, age: 31 });
});
