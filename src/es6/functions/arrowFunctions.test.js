import { getGreetingOneLine } from "./arrowFunctions";

it("should call function", () => {
  //when
  const string = getGreetingOneLine();
  //then
  expect(string).toEqual("Welcome to ES6");
});
