import React from "react";
import "./Card.css";

export function Card(props) {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
}
