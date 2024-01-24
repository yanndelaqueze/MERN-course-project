import React from "react";

import { Input } from "../../shared/components/FormElements/Input";

import "./NewPlace.css";

export function NewPlace() {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="title"
        validators={[]}
        onChange={() => {}}
      />
    </form>
  );
}
