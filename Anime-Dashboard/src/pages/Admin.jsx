import React from "react";
import UserList from "../components/AdminPage/UserList";
import Clubs from "../components/AdminPage/Clubs";

function Admin() {
  window.scrollTo(0, 0);

  return (
    <>
      <Clubs />
      <UserList />
    </>
  );
}

export default Admin;
