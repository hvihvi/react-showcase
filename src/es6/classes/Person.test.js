import Person from "./Person";

it("should concat name and surname", () => {
  //given
  const me = new Person("Hugo", "Vinet");
  //when
  const name = me.getName();
  //then
  expect(name).toEqual("Hugo Vinet");
});
