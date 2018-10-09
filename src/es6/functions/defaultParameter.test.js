import { multiply } from "./defaultParameter";

it("should call function with default value", () => {
  //given
  const input = 3;
  //when
  const result = multiply(undefined, input);
  //then
  expect(result).toEqual(input);
});
