import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Users from "./Users";
import User from "./User";
import Home from "./Home";
import ShowGithubUser from "./ShowGithubUser";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div>
      <Link style={{}} to={"/"}>
        Home
      </Link>
      <Link style={{ "margin-left": "20px" }} to={"users"}>
        Users
      </Link>
      <Link style={{ "margin-left": "20px" }} to={"users/asdf"}>
        Username
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="users" element={<Users />}>
          <Route index element={<div>Add a user and select it</div>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
