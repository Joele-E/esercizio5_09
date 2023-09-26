import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./Users";
import User from "./User";
import Home from "./Home";
import ShowGithubUser from "./ShowGithubUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
