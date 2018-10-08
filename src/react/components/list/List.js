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
      {users.filter(user => user.isDev === true).map(user => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default List;
