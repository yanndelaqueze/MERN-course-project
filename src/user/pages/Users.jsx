import React from "react";
import { UsersList } from "../components/UsersList";

export function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Arthur Fleck",
      image:
        "https://lh3.googleusercontent.com/ogw/ANLem4YjBhHVnCY6AQGbdcaygm1P-5DNDnuRqMWSomTWRrw=s64-c-mo",
      places: 3,
    },
  ];

  return (
    <>
      <UsersList items={USERS} />
    </>
  );
}
