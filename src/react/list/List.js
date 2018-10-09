import React from "react";

/**
 * - Use `const` over `var` : immutability intent (can still mutate)
 * - `map` example combined with JSX
 */
const List = () => {
  const users = [
    { name: "Jean", isDev: true },
    { name: "Pierre", isDev: true },
    { name: "Max", isDev: false }
  ];

  return (
    <ul>
      {users.filter(doFilter).map(user => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

/**
 * Extracting functions allows to unit test them in isolation from the component
 */
const doFilter = user => user.isDev === true;

export default List;
