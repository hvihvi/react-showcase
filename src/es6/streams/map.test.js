import { mapToMultiplyByTwo } from "./map";

it("should map to object", () => {
  //given
  const numbers = [10, 1, 11];
  //when
  const jeans = mapToMultiplyByTwo(numbers);
  //then
  expect(jeans).toEqual([20, 2, 22]);
});
