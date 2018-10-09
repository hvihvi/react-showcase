import React from "react";
import { Provider } from "react-redux";
import * as Redux from "redux";
import Counter from "./components/Counter";
import counter from "./redux/counter";

const store = Redux.createStore(
  Redux.combineReducers({ counter }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * wrap all the components at the root of the application with <Provider/> from react-redux
 * it allows you to inject the state of the app (managed by redux) in any component
 * wrap them with `connect` from react-redux to inject state in a component
 */
const CounterApp = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default CounterApp;
