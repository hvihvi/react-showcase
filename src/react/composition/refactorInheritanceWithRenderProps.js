import React from "react";

/**
 * This example shows component inheritance
 * This is the pattern we want to avoid
 * Here we are refactoring it with RenderProps
 */
class BaseComponent extends React.Component {
  state = {
    field: "field from BaseComponent"
  };

  // lifecycle methods
  componentDidMount() {
    // do something
    console.log("BaseComponent mounted");
  }

  // custom class methods
  // sometimes used to override behaviour via inheritance
  // * You can pass props instead to cover this usecase of inheritance
  // * You can extract a function that doesn't have to be bound to a class
  // * You can pass functions as props
  getSomething() {
    return "Something from BaseComponent";
  }
  render() {
    return (
      <>
        <div>{this.state.field}</div>
        <div>{this.getSomething()}</div>
      </>
    );
  }
}

class AnotherLifecycleComponent extends BaseComponent {
  componentDidMount() {
    console.log("AnotherLifecycleComponent mounted");
  }
}

export const AppWithInheritance = () => <AnotherLifecycleComponent />;

/**
 * This pattern is Render Props (wrapper variant)
 * the "render" is passed as a children component
 */
class RenderPropsWrapper extends React.Component {
  state = {
    field: "field from RenderPropsWrapper"
  };

  // lifecycle methods
  componentDidMount() {
    // do something
    console.log("RenderPropsWrapper mounted");
  }

  render() {
    const { field } = this.state;
    return (
      <>
        <div>I'm RenderPropsWrapper</div>
        <div>{this.props.children(field)}</div>
      </>
    );
  }
}

const SubComponent = ({ field }) => <div>I can access {field}</div>;

export const AppWithRenderPropsWrapper = () => (
  <RenderPropsWrapper>
    {field => <SubComponent field={field} />}
  </RenderPropsWrapper>
);

/**
 * this pattern is Render Props
 * the "render" is passed as a props
 */
class RenderProps extends React.Component {
  state = {
    field: "field from RenderProps"
  };

  // lifecycle methods
  componentDidMount() {
    // do something
    console.log("RenderProps mounted");
  }

  render() {
    const { render } = this.props;
    const { field } = this.state;
    return (
      <>
        <div>I'm RenderProps</div>
        <div>{render(field)}</div>
      </>
    );
  }
}

export const AppWithRenderProps = () => (
  <RenderProps render={field => <SubComponent field={field} />} />
);
