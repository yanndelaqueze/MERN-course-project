import React, { useCallback } from "react";
import "./UsersList.css";
import { UserItem } from "./UserItem";

export function UsersList({ items }) {
  if (items.length === 0) {
    return (
      <div className="center">
        <h2>No users found...</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
}
