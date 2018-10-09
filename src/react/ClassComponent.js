import React, { Component } from "react";

/** class component example
 * extends React.Component
 * !!! composition over inheritance !!!
 * don't inherit components from anything else
 * implement render()
 * <Jsx/> <=> React.createElement(Jsx) => import React
 * extract method getGreetings
 * "this" is similar to java
 */
class ClassComponent extends Component {
  getGreetings() {
    return "Hello";
  }
  render() {
    return (
      <div>
        <h1>{this.getGreetings()}</h1>
        <h2>I am a class component</h2>
      </div>
    );
  }
}

export default ClassComponent;
