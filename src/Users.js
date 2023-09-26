import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <Outlet />
      <Link to={"/"}>HOME</Link>
    </div>
  );
};

export default Users;
