import React from "react";
import "./UserItem.css";
import { Avatar } from "../../shared/components/UIElements/Avatar";

export function UserItem({ image, name, placeCount }) {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <Avatar image={image} alt={name} />
        </div>
        <div className="user-item__info">
          <h2>{name}</h2>
          <h3>
            {placeCount} {placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
}
