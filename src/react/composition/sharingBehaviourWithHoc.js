import React from "react";

/**
 * This is a HOC (Higher-order component), a higher-order function applied to a component
 */
const withLoading = Component => ({ isLoading, ...props }) =>
  isLoading ? <p>Loading</p> : <Component {...props} />;

const Hello = name => <div>Hello {name}</div>;

const HelloWithLoading = withLoading(<Hello />);

export const Example = () => (
  <HelloWithLoading isLoading={true} name={"Hugo"} />
);

/**
 * React.memo : only re-renders if props change
 */
const MyComponent = React.memo(props => {
  /* only rerenders if props change */
});