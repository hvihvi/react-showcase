import React from "react";

const Conditionnal = props =>
  props.condition ? (
    <div>condition is matched</div>
  ) : (
    <div>condition is NOT matched</div>
  );

export default Conditionnal;
