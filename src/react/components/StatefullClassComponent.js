import React, { Component } from "react";

/**
 * - No more old syntax with this.method.bind(this)
 * - Always mutate component state with this.setState(newState)
 */
class StatefullClassComponent extends Component {
  state = {
    counter: 0
  };

  onIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  onDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button onClick={this.onIncrement} type="button">
          Increment
        </button>
        <button onClick={this.onDecrement} type="button">
          Decrement
        </button>
      </div>
    );
  }
}
