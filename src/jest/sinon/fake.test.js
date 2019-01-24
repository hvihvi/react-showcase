import sinon from "sinon";
import { once } from "./fake";

it("calls the original function", () => {
  // given
  var callback = sinon.fake();
  var proxy = once(callback);

  // when
  proxy();

  // then
  expect(callback.called).toBeTruthy();
  expect(callback.calledOnceWith()).toBeTruthy();
});
