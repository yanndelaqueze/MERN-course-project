import React, { useState } from "react";

import "./Auth.css";

import { Card } from "../../shared/components/UIElements/Card";
import { Input } from "../../shared/components/FormElements/Input";
import { Button } from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

export function Auth() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  function switchModeHandler() {
    setIsLoginMode((prevMode) => !prevMode);
  }

  function authSubmitHandler(event) {
    event.preventDefault();
    console.log(formState.inputs);
  }

  return (
    <>
      <Card className="authentication">
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name"
              onInput={inputHandler}
            />
          )}
          <Input
            element="input"
            id="email"
            type="email"
            label="e-mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address !"
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password (5 characters min.) !"
            onInput={inputHandler}
          />
          <Button type="submit" disable={!formState.isValid}>
            {isLoginMode ? "LOGIN" : "SIGN UP"}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? "SIGN UP" : "LOGIN"}
        </Button>
      </Card>
      ;
    </>
  );
}
