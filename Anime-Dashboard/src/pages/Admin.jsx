import React from "react";
import UserList from "../components/AdminPage/UserList";
import Clubs from "../components/AdminPage/Clubs";
import InfoCard from "../components/AdminPage/InfoCard";

function Admin() {
  window.scrollTo(0, 0);

  return (
    <>
      <InfoCard/>
      <Clubs />
      <UserList />
    </>
  );
}

export default Admin;
