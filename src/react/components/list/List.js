import React from "react";

/**
 * - Use `const` over `var` : immutability intent (can still mutate)
 * - `map` example combined with JSX
 */
const List = () => {
  const users = [{ name: "Robin" }, { name: "Markus" }];

  return (
    <ul>
      {users.map(user => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default List;
