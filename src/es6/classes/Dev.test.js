import Dev from "./Dev";

it("should have job", () => {
  //given
  const me = new Dev("Hugo", "Vinet");
  //when
  const job = me.getJob();
  //then
  expect(job).toEqual("Dev");
});
