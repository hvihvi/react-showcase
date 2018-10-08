import { filterGreaterThanTen } from "./filter";

it("should only keep numbers lower than 10", () => {
  //given
  const numbers = [10, 1, 11, 3, 31];
  //when
  const jeans = filterGreaterThanTen(numbers);
  //then
  expect(jeans).toHaveLength(2);
});
