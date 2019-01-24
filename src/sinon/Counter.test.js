import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Counter, CounterText } from "./Counter";
import renderer from "react-test-renderer";
import React from "react";
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Snapshot test example with react-test-renderer to render
 *
 * It is also possible to use enzyme rendered component for snaphsot tests
 * but it takes a bit of setup to not snapshot the wrapper
 *
 */
it("renders correctly", () => {
  // given
  const tree = renderer
    .create(<Counter value={2} onIncrement={() => {}} onDecrement={() => {}} />)
    .toJSON();
  // then
  expect(tree).toMatchSnapshot();
});

/**
 * Test values with enzyme mount
 */
it("should display 2 when value is 2", () => {
  // given
  const wrapper = mount(
    <Counter value={2} onIncrement={() => {}} onDecrement={() => {}} />
  );
  // when
  const val = wrapper.find(CounterText).text();
  // then
  expect(val).toEqual("Clicked: 2 times");
});

/**
 * Test values with enzyme shallow
 * Note => shallow doesn't render sub components
 */
it("should display 2 when value is 2", () => {
  // given
  const wrapper = shallow(
    <Counter value={2} onIncrement={() => {}} onDecrement={() => {}} />
  );
  // when
  const val = wrapper.find(CounterText).text();
  // then
  expect(val).toEqual("<CounterText />");
});

/**
 * Example of component callback testing with sinon fake and enzyme mount
 * Shallow only renders the component and mocks subcomponent
 * Mount renders the whole tree
 */
it("should call onIncrement when clicking + buton", () => {
  // given
  var callback = sinon.fake();
  const wrapper = mount(
    <Counter value={2} onIncrement={() => {}} onDecrement={() => {}} />
  );
  // when
  // then
});
