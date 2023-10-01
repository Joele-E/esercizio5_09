import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>USERS</h1>
      <Outlet />
      <Link to={"/"}>HOME</Link>
    </div>
  );
};

export default Users;
