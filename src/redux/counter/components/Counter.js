import React from "react";
import { connect } from "react-redux";
import { onDecrement, onIncrement } from "../redux/counter";

const Counter = ({ value, onDecrement, onIncrement }) => (
  <p>
    Clicked: {value} times
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </p>
);

const mapStateToProps = state => {
  return {
    value: state.counter.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(onIncrement),
    onDecrement: () => dispatch(onDecrement)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
