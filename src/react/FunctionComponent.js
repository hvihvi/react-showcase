import React from "react";

/**
 * convention : upperCase for components
 * Oneliner example, can omit parenthesis around (props)
 */
const Hello = props => <b>Hello {props.subject}!</b>;

/**
 * Composition example
 */
const FunctionComponent = () => (
  <h1>
    <Hello subject={"Sir"} />
  </h1>
);

export default FunctionComponent;
