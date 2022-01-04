import React, { useEffect, memo } from "react";

const Item = memo(({ user, handleDelete }) => {
  useEffect(() => {
    console.log("item render");
  });
  return (
    <li>
      <h1>{user.name}</h1>
      <button onClick={() => handleDelete(user.id)}>Delete</button>
    </li>
  );
});

export default Item;
