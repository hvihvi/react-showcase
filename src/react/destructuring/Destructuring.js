import React from "react";

// without destructuring
const NoDestructuring = props => (
  <div>
    {props.name} is {props.age} years old
  </div>
);

// with destructuring
const Destructuring = ({ name, age }) => (
  <div>
    {name} is {age} years old
  </div>
);

// with destructuring class
/**
 * It is common to destructure this.props and this.state at the start of Component functions
 */
class DestructuringClass extends React.Component {
  state = { city: "Paris" };

  render() {
    const { name, age } = this.props;
    const { city } = this.state;
    return (
      <div>
        {name} is {age} years old. He is currently in {city}
      </div>
    );
  }
}

// example with component call
const CallToComponent = () => <Destructuring name={"Joe"} age={"31"} />;
