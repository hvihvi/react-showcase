import React from "react";

/**
 * This component is visible if props.visible is true (ie: <Hideable visible=true />)
 *
 * The && syntax is commonly used as a short syntax to check if a component should be rendered
 *
 * This works because `a && b` will only evaluate `b` if `a` is true
 * (and evaluating `b` "renders" it)
 */
const Hideable = props =>
  props.visible && <div>I'm visible if props.visible is true</div>;

export default Hideable;
