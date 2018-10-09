import React from "react";

const Wrapped = ({ name, age }) => (
  <div>
    {name} is {age} years old
  </div>
);

const Wrapper = props => (
  <div className={"Wrapper"}>
    <Wrapped {...props}>{props.children}</Wrapped>
  </div>
);

const CallToWrapper = () => <Wrapper name={"Joe"} age={21} />;
