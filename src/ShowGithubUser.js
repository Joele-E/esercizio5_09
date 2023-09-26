import React from "react";
import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser";

const ShowGithubUser = () => {
  const { username } = useParams();
  return (
    <div>
      ciao {username}
      <GithubUser user={username} />
    </div>
  );
};

export default ShowGithubUser;
