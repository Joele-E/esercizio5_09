import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>USERS</h1>
      <Outlet />
      <Link to={"/users/asdf"}>USER asdf</Link>
      <br />
    </div>
  );
};

export default Users;
