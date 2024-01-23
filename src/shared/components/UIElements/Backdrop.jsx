import React from "react";
import ReactDOM from "react-dom";

import "./Backdrop.css";

export function Backdrop(props) {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
}
