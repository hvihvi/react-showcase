import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Counter } from "./Counter";
import renderer from "react-test-renderer";
import React from "react";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Snapshot test example with react-test-renderer to render
 */
it("renders correctly", () => {
  // given
  const tree = renderer
    .create(<Counter value={2} onIncrement={() => {}} onDecrement={() => {}} />)
    .toJSON();
  // then
  expect(tree).toMatchSnapshot();
});

it("should call onIncrement when clicking + buton", () => {
  // given
  const wrapper = shallow(
    <Counter value={2} onIncrement={() => {}} onDecrement={() => {}} />
  );
  // when

  // then
});
